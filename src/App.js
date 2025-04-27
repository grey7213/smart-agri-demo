import React, { useState } from 'react';
import { cropData } from './data';
import { Container, CssBaseline, Stack, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import ProducerView from './components/ProducerView';
import DistributorView from './components/DistributorView';
import LogisticsView from './components/LogisticsView';
import ConsumerView from './components/ConsumerView';
import './App.css';

// Create a custom theme with green primary color to match agricultural focus
const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Green shade
    },
    secondary: {
      main: '#f57c00', // Orange shade for contrast
    },
  },
  typography: {
    fontFamily: "'Microsoft YaHei', '微软雅黑', Arial, sans-serif",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)'
          }
        }
      }
    }
  }
});

function App() {
  // State to track the selected crop
  const [selectedCrop, setSelectedCrop] = useState('');
  
  // Get the data for the selected crop, if any
  const currentCropData = selectedCrop ? cropData[selectedCrop] : null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalizes CSS */}
      <Container maxWidth="lg">
        <Header />
        
        <Stack spacing={3} sx={{ mb: 4 }}>
          <ProducerView 
            selectedCrop={selectedCrop} 
            setSelectedCrop={setSelectedCrop} 
            producerData={currentCropData?.producer} 
            crops={Object.keys(cropData)}
          />
          
          <DistributorView 
            selectedCrop={selectedCrop}
            distributorData={currentCropData?.distributor}
          />
          
          <LogisticsView 
            selectedCrop={selectedCrop}
            logisticsData={currentCropData?.logistics}
          />
          
          <ConsumerView 
            selectedCrop={selectedCrop}
            consumerData={currentCropData?.consumer}
          />
        </Stack>
        
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App; 