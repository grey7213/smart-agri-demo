import React from 'react';
import { 
  Card, CardHeader, CardContent, Typography, 
  Box, List, ListItem, Paper, Chip
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

function DistributorView({ selectedCrop, distributorData }) {
  return (
    <Card elevation={3}>
      <CardHeader 
        title="经销商视角：供应与标准" 
        action={
          <Chip 
            label="农产品经销商" 
            color="primary" 
            size="small" 
            sx={{ fontWeight: 'bold' }}
          />
        }
        sx={{ 
          backgroundColor: 'rgba(46, 125, 50, 0.08)', 
          '& .MuiCardHeader-title': { fontWeight: 'bold' }
        }}
      />
      
      <CardContent>
        {!selectedCrop ? (
          <Paper sx={{ 
            p: 4, 
            textAlign: 'center', 
            color: 'text.secondary',
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
          }}>
            <Typography variant="h6">请从上方选择一种农产品查看分析</Typography>
          </Paper>
        ) : (
          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              当前可整合供应
            </Typography>
            
            <List disablePadding>
              {distributorData.supplies.map((supply, index) => (
                <Paper 
                  key={index} 
                  elevation={1} 
                  sx={{ 
                    mb: 2, 
                    p: 2, 
                    borderLeft: '4px solid #2e7d32',
                    backgroundColor: 'rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <ListItem 
                    disablePadding 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 2,
                      py: 1 
                    }}
                  >
                    <Typography variant="body1">产品：{selectedCrop}</Typography>
                    <Typography variant="body1">产地：{supply.origin}</Typography>
                    <Typography variant="body1">等级：{supply.grade}</Typography>
                    <Typography variant="body1">可供数量：{supply.quantity}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body1" mr={1}>状态：</Typography>
                      <Chip 
                        icon={<VerifiedIcon />}
                        label={supply.status} 
                        color="success" 
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                  </ListItem>
                </Paper>
              ))}
            </List>
            
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary" fontStyle="italic">
                通过平台可一键下单或发起询价。
              </Typography>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default DistributorView; 