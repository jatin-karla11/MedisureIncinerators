import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch,Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/about" component={AboutDetail}/>
      <Route exact path="/service" component={Home}/>
      <Route exact path="/contact" component={Contact}/> */}

      <Redirect to="/" />

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
