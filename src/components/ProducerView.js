import React, { useState, useEffect } from 'react';
import { 
  Card, CardHeader, CardContent, Typography, FormControl, 
  InputLabel, Select, MenuItem, Box, Divider, Paper, Stack
} from '@mui/material';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';

function ProducerView({ selectedCrop, setSelectedCrop, producerData, crops }) {
  const [contentOpacity, setContentOpacity] = useState(1);
  const [prevCrop, setPrevCrop] = useState('');
  
  // 当选择的农产品改变时，处理过渡效果
  useEffect(() => {
    if (selectedCrop !== prevCrop) {
      // 淡出
      setContentOpacity(0);
      
      // 等待淡出完成后更新prevCrop
      const timer = setTimeout(() => {
        setPrevCrop(selectedCrop);
        // 淡入
        setContentOpacity(1);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [selectedCrop, prevCrop]);

  const handleCropChange = (e) => {
    setSelectedCrop(e.target.value);
  };

  // Generate chart data based on demand trend
  const generateTrendData = (demandType) => {
    switch(demandType) {
      case '上升':
        return [
          { month: '第1个月', value: 10 },
          { month: '第2个月', value: 15 },
          { month: '第3个月', value: 25 }
        ];
      case '下降':
        return [
          { month: '第1个月', value: 25 },
          { month: '第2个月', value: 15 },
          { month: '第3个月', value: 10 }
        ];
      default: // 平稳
        return [
          { month: '第1个月', value: 15 },
          { month: '第2个月', value: 15 },
          { month: '第3个月', value: 15 }
        ];
    }
  };

  // Determine chart color based on demand
  const getChartColor = (demand) => {
    switch(demand) {
      case '上升':
        return '#4caf50'; // Green
      case '下降':
        return '#f44336'; // Red
      default:
        return '#ff9800'; // Orange
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card elevation={3}>
        <CardHeader 
          title="生产者视角：市场与定价" 
          action={
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Chip 
                label="农业生产者" 
                color="primary" 
                size="small" 
                sx={{ 
                  fontWeight: 'bold',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }
                }}
              />
            </motion.div>
          }
          sx={{ 
            backgroundColor: 'rgba(46, 125, 50, 0.08)', 
            '& .MuiCardHeader-title': { fontWeight: 'bold' }
          }}
        />
        
        <CardContent>
          <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
            <InputLabel id="crop-select-label">选择农产品</InputLabel>
            <Select
              labelId="crop-select-label"
              id="crop-select"
              value={selectedCrop}
              onChange={handleCropChange}
              label="选择农产品"
            >
              <MenuItem value="" disabled>-- 请选择 --</MenuItem>
              {crops.map(crop => (
                <MenuItem key={crop} value={crop}>{crop}</MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {!selectedCrop ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Paper sx={{ 
                p: 4, 
                textAlign: 'center', 
                color: 'text.secondary',
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }}>
                <Typography variant="h6">请从上方选择一种农产品查看分析</Typography>
              </Paper>
            </motion.div>
          ) : (
            <motion.div
              key={selectedCrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    市场需求趋势
                  </Typography>
                  
                  {/* New Chart Visualization */}
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" gutterBottom>
                      未来3个月需求趋势预测
                    </Typography>
                    <Box sx={{ height: 200, width: '100%' }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={generateTrendData(producerData.demand)}
                          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis 
                            dataKey="month" 
                            axisLine={false}
                            tickLine={false}
                          />
                          <YAxis 
                            hide={true}
                          />
                          <Tooltip 
                            formatter={(value) => [`需求指数: ${value}`, '值']}
                            labelFormatter={(label) => `${label}`}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke={getChartColor(producerData.demand)} 
                            strokeWidth={2}
                            dot={{ stroke: getChartColor(producerData.demand), strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mt: 1, 
                        textAlign: 'center',
                        color: getChartColor(producerData.demand),
                        fontWeight: 'bold'
                      }}
                    >
                      市场需求预测: {producerData.demand}
                    </Typography>
                  </Box>
                </Box>
                
                <Divider />
                
                <Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    参考市场价格
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    主要批发市场均价：¥{producerData.wholesalePrice}/斤
                  </Typography>
                  <Typography variant="body1">
                    主流电商平台售价：¥{producerData.ecomPrice}/斤
                  </Typography>
                </Box>
                
                <Divider />
                
                <Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    智能定价建议
                  </Typography>
                  <Typography variant="body1">
                    建议零售价区间：¥{producerData.suggestedPrice}/斤
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  mt: 2, 
                  pt: 2, 
                  borderTop: '1px dashed rgba(0, 0, 0, 0.12)',
                  textAlign: 'right' 
                }}>
                  <Typography variant="caption" color="text.secondary" fontStyle="italic">
                    数据来源：模拟整合多渠道市场分析结果
                  </Typography>
                </Box>
              </Stack>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProducerView; 