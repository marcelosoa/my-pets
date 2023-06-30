import HeaderComponent from '../Header';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/style/theme/default';
import GlobalStyle from '../../assets/style/style';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './index';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Container>
          <HeaderComponent />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
