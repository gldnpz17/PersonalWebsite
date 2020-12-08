import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: "#455a64",
  primaryDark: "#1c313a",
  primaryLight: "#718792",
  textOnPrimary: "white",

  secondary: "#1976d2",
  secondaryDark: "#004ba0",
  secondaryLight: "#63a4ff",
  textOnSecondary: "white"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path="/index">
            <HomePage />
          </Route>

          <Route path="/projects">
            <ProjectsPage />
          </Route>

          {/*404*/}
          <Route>
            <p>404!</p>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
