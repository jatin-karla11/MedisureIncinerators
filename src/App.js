import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch,Redirect } from 'react-router-dom';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Redirect to="/" />

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
