import { ThemeProvider } from 'styled-components';
import { defaulTheme } from './styles/themes/default';
import './App.css'
import { GlobalStyle } from './styles/global';

export function App() {

  return (
    <ThemeProvider theme={defaulTheme}>
      Hello World
      <GlobalStyle />
    </ThemeProvider>
  );
}