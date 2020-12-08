import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>

        {/*404*/}
        <Route>
          <p>404!</p>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
