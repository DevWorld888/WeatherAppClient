
import reactLogo from './assets/S1.png'

import './App.css'
import CityList from './components/CityList'
import DetailsCity from './components/DetailsCity'
import DetailsWeather from './components/DetailsWeather'
import { useSelector } from 'react-redux'
import { Grid, Container, Paper } from '@mui/material';
import { useEffect } from 'react'
function App() {
  const { name } = useSelector(state => state.weather)
  useEffect(() => {
    document.body.style.backgroundColor = '#91DDCF';
  }, []);

  return (
    <Container style={{minHeight: '100vh', padding: '16px' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <div>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </Grid>
        <Grid item xs={12}>
          <h1 style={{color:"#FFF"}}>{name}</h1>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '16px',backgroundColor: '#121212', color: '#ffffff' }}>
            <CityList />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '16px',backgroundColor: '#121212', color: '#ffffff' }}>
            <DetailsCity />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '16px',backgroundColor: '#121212', color: '#ffffff'  }}>
            <DetailsWeather />
          </Paper>
        </Grid>
      </Grid>
    </Container>


  )
}

export default App
