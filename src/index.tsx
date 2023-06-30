import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import GlobalStyles from './assets/style/style';
import DefaultTheme from './assets/style/theme/default';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
    <GlobalStyles />
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
