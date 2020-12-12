import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AdminNavigationBar from './components/AdminNavigationBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';
import { ThemeProvider } from 'styled-components';
import BlogPage from './pages/BlogPage';
import { Container } from 'react-bootstrap';
import AboutPage from './pages/AboutPage';
import AdminProfilePage from './pages/AdminProfilePage';
import AdminWelcomePage from './pages/AdminWelcomePage';

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
        <Container fluid className="m-0 p-0 min-vh-100 d-flex flex-column" style={{overflow: "hidden"}}>
          <Container fluid className="flex-fill m-0 p-0 d-flex flex-column">
            <Switch>
              <Route path="/admin">
                <AdminNavigationBar />
                <AdminWelcomePage />
              </Route>

              <Route path="/">
                <NavigationBar />
                <HomePage />
              </Route>

              {/*404*/}
              <Route path="*">
                <h1 className="text-center">404!</h1>
              </Route>
            </Switch>
          </Container>
          <Footer />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
