import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch, Redirect } from 'react-router-dom';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin'
import Client from './pages/Client'
import ProtectedRoute from './ProtectedRoute'
import Clients from './pages/Admin/Clients/Clients'
import axios from 'axios'
import PCB from './pages/PCB';
import SingleClient from './pages/Admin/Clients/SingleClient'
import Editprofile from  './pages/Editprofile/Editprofile'
axios.defaults.withCredentials = true;


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/pcb" component={PCB} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path = "/auth/admin/clients" component = {Clients} />
        <Route path = "/auth/admin/clients/:clientid" component = {SingleClient} />
        <Route path = "/auth/editprofile" component = {Editprofile} />
        {/* <ProtectedRoute exact path="/pcb" component={PCB}/> */}
        {/* <ProtectedRoute exact path="/client" component={Client}/> */}
        {/* <ProtectedAdminRoute exact path="/admin" component={Admin} /> */}
        {/* <Redirect to="/" /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
