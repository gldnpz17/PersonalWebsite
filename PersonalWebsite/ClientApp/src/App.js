import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
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
import AuthContext from './contexts/AuthContext';
import { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage';
import UnderConstructionPage from './pages/UnderConstructionPage';

const theme = {
  primary: "#455a64",
  primaryDark: "#1c313a",
  primaryLight: "#718792",
  textOnPrimary: "white",

  secondary: "#1976d2",
  secondaryDark: "#004ba0",
  secondaryLight: "#63a4ff",
  textOnSecondary: "white"
};

function App() {
  const [authInfo, setAuthInfo] = useState(
    {
      isLoggedIn: false,
      checkAuthStatus: null
    }
  );

  const checkAuthStatus = async () => {
    var response = await fetch("/api/auth/authentication-check", {
      method: "GET"
    });

    if (response.status === 200) {
      setAuthInfo({
        ...authInfo,
        isLoggedIn: true
      });
    } else {
      setAuthInfo({
        ...authInfo,
        isLoggedIn: false
      })
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthContext.Provider value={{
          ...authInfo,
          checkAuthStatus: checkAuthStatus
        }}>
          <Container fluid className="m-0 p-0 min-vh-100 d-flex flex-column" style={{overflow: "hidden"}}>
            <Container fluid className="flex-fill m-0 p-0 d-flex flex-column">
              <Switch>
                <Route path="/admin">
                  <AdminNavigationBar />
                  <AdminWelcomePage />
                </Route>

                <Route exact path="/">
                  <UnderConstructionPage />
                </Route>

                <Route path="/">
                  <NavigationBar />
                  
                  <Switch>
                    <Route exact path="/landing">
                      <LandingPage />
                    </Route>

                    <Route path="/blog">
                      <BlogPage />
                    </Route>

                    <Route path="/projects">
                      <ProjectsPage />
                    </Route>

                    <Route path="/about">
                      <AboutPage />
                    </Route>

                    {/*404*/}
                    <Route path="*">
                      <h1 style={{position: 'absolute', top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>404!</h1>
                    </Route>
                  </Switch>

                  <Footer />
                </Route>
              </Switch>
            </Container>
          </Container>
        </AuthContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
