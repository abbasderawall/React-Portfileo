import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components'
import { theme } from './themes/theme'

ReactDOM.render(
    window.fbq('track', 'PageView'),
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  
 
  document.getElementById('root')
  
);