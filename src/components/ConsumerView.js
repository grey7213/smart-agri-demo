import React from 'react';
import { 
  Card, CardHeader, CardContent, Typography, 
  Box, Paper, Grid, Chip
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

function ConsumerView({ selectedCrop, consumerData }) {
  return (
    <Card elevation={3}>
      <CardHeader 
        title="消费者视角：产品溯源" 
        action={
          <Chip 
            label="消费者" 
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
              扫码溯源信息
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Paper 
                    elevation={1}
                    sx={{ 
                      width: 150, 
                      height: 150, 
                      bgcolor: 'white',
                      p: 1.5,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `
                          linear-gradient(to right, black 10px, transparent 10px),
                          linear-gradient(to bottom, black 10px, transparent 10px),
                          linear-gradient(to right, black 10px, transparent 10px),
                          linear-gradient(to bottom, black 10px, transparent 10px)
                        `,
                        backgroundPosition: '0 0, 0 0, 100% 0, 0 100%',
                        backgroundSize: '35px 3px, 3px 35px, 35px 3px, 3px 35px',
                        backgroundRepeat: 'no-repeat',
                      }
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                    智农溯源码
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={8} md={9}>
                <Box 
                  component={Paper} 
                  variant="outlined" 
                  sx={{ p: 2 }}
                >
                  <Box sx={{ '& > p': { py: 1, borderBottom: '1px solid #f0f0f0' } }}>
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        产品名称：
                      </Box>
                      {consumerData.productName}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        产品批次：
                      </Box>
                      {consumerData.batchNumber}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        原产地：
                      </Box>
                      {consumerData.origin}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        种植农户：
                      </Box>
                      {consumerData.farmer}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        采摘日期：
                      </Box>
                      {consumerData.harvestDate}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        质检信息：
                      </Box>
                      {consumerData.qualityCheck}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        物流信息：
                      </Box>
                      {consumerData.logistics}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        上架商家：
                      </Box>
                      {consumerData.seller}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        认证信息：
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 0.5 }}>
                        {consumerData.certifications.map((cert, index) => (
                          <Chip 
                            key={index} 
                            label={cert} 
                            color="success"
                            size="small"
                            icon={<VerifiedIcon />}
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default ConsumerView; 