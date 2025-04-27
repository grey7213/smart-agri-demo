import React from 'react';
import { 
  Card, CardHeader, CardContent, Typography, 
  Box, Paper, Grid, Chip
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
// Import QRCodeSVG but we'll ensure it's used correctly
import { QRCodeSVG } from 'qrcode.react';

/**
 * Consumer View Component - Shows traceability information
 */
function ConsumerView({ selectedCrop, consumerData }) {
  // 检查是否有完整数据可用
  const hasData = selectedCrop && consumerData;
  
  // 创建二维码内容 - 避免 null/undefined
  const qrValue = (consumerData && consumerData.productName) 
    ? `智农溯源信息:${consumerData.productName}` 
    : '智农溯源信息';

  return (
    <Card elevation={3}>
      <CardHeader 
        title="消费者视角：产品溯源" 
        action={consumerData && (
          <Chip 
            label="消费者" 
            color="primary" 
            size="small" 
            sx={{ fontWeight: 'bold' }}
          />
        )}
        sx={{ 
          backgroundColor: 'rgba(46, 125, 50, 0.08)', 
          '& .MuiCardHeader-title': { fontWeight: 'bold' }
        }}
      />
      
      <CardContent>
        {!hasData ? (
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
                  <Paper elevation={1} sx={{ p: 2, bgcolor: 'white' }}>
                    {/* 
                      ====== URGENT: POTENTIAL DEPENDENCY CONFLICT ======
                      ERROR: 'Invalid hook call' likely due to package issues.
                      
                      ANALYSIS:
                      1. React version found in package.json: ^19.1.0 (experimental/unstable)
                      2. qrcode.react dependency: Outside project scope in parent folder
                      
                      ACTION REQUIRED (Manual Steps by Developer):
                      1. **STOP the development server NOW.**
                      2. **DELETE the 'node_modules' folder.**
                      3. **DELETE the 'package-lock.json' (or 'yarn.lock') file.**
                      4. **Run 'npm install' (or 'yarn install') in your terminal.** This performs a clean installation based on the updated package.json.
                      5. **Restart the development server ('npm start' or 'npm run dev').**
                      
                      CHANGES MADE:
                      - React and React DOM downgraded to stable v18.2.0
                      - qrcode.react v3.1.0 added directly to project dependencies
                      
                      If the error STILL persists after these steps, the 'qrcode.react' library may be incompatible.
                      Consider the FALLBACK OPTION below.
                    */}
                    
                    {/* --- FALLBACK OPTION (Use if clean install fails) ---
                    1. npm install react-qr-code
                    2. Replace QRCodeSVG import with: import QRCode from "react-qr-code";
                    3. Replace the QRCodeSVG component below with:
                       <QRCode value={qrValue} size={130} />
                    --- END FALLBACK --- */}
                    
                    {/* Original QRCodeSVG component rendering follows: */}
                    {hasData ? (
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <QRCodeSVG 
                          value={qrValue}
                          size={130}
                          level="M"
                          includeMargin
                          // key removed as it might cause additional re-renders
                        />
                      </div>
                    ) : (
                      <Box sx={{ width: 130, height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="caption" color="text.secondary">请选择农产品</Typography>
                      </Box>
                    )}
                  </Paper>
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
                      {consumerData && consumerData.productName}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        产品批次：
                      </Box>
                      {consumerData && consumerData.batchNumber}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        原产地：
                      </Box>
                      {consumerData && consumerData.origin}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        种植农户：
                      </Box>
                      {consumerData && consumerData.farmer}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        采摘日期：
                      </Box>
                      {consumerData && consumerData.harvestDate}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        质检信息：
                      </Box>
                      {consumerData && consumerData.qualityCheck}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        物流信息：
                      </Box>
                      {consumerData && consumerData.logistics}
                    </Typography>
                    
                    <Typography variant="body1">
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        上架商家：
                      </Box>
                      {consumerData && consumerData.seller}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                      <Box component="span" fontWeight="bold" color="text.secondary" mr={1}>
                        认证信息：
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 0.5 }}>
                        {consumerData && consumerData.certifications && consumerData.certifications.map((cert, index) => (
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