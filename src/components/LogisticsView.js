import React from 'react';
import { 
  Card, CardHeader, CardContent, Typography, 
  Box, Paper, Grid, Alert, AlertTitle, Chip
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function LogisticsView({ selectedCrop, logisticsData }) {
  return (
    <Card elevation={3}>
      <CardHeader 
        title="物流视角：配送优化" 
        action={
          <Chip 
            label="物流企业" 
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
              智能物流调度
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    路径优化
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {logisticsData.route.description}
                  </Typography>
                  
                  <Paper 
                    elevation={1} 
                    sx={{ 
                      height: 200, 
                      bgcolor: '#f0f7f0', 
                      position: 'relative',
                      borderRadius: 2,
                      border: '1px solid #ddd',
                      overflow: 'hidden'
                    }}
                  >
                    <Box 
                      sx={{ 
                        position: 'absolute', 
                        height: 4, 
                        bgcolor: '#2e7d32',
                        width: '60%',
                        top: '50%',
                        left: '20%',
                        transform: 'rotate(15deg)'
                      }} 
                    />
                    <Box 
                      sx={{ 
                        position: 'absolute', 
                        width: 30, 
                        height: 30,
                        bgcolor: '#4caf50',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        top: 50,
                        left: 70
                      }}
                    >
                      A
                    </Box>
                    <Box 
                      sx={{ 
                        position: 'absolute', 
                        width: 30, 
                        height: 30,
                        bgcolor: '#f44336',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        bottom: 60,
                        right: 80
                      }}
                    >
                      B
                    </Box>
                  </Paper>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    智能控温
                  </Typography>
                  
                  {logisticsData.temperature.map((vehicle, index) => (
                    <Alert 
                      key={index}
                      severity={vehicle.isWarning ? "warning" : "success"}
                      icon={vehicle.isWarning ? <WarningAmberIcon /> : <CheckCircleOutlineIcon />}
                      sx={{ mb: 2 }}
                    >
                      <AlertTitle>冷链车 {vehicle.vehicleId}</AlertTitle>
                      车厢温度 {vehicle.temperature} — <strong>{vehicle.status}</strong>
                    </Alert>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default LogisticsView; 