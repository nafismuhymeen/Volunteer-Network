import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from './Components/Admin/Admin';
import AdminVolunList from './Components/Admin/AdminVolunList/AdminVolunList';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Register from './Components/Register/Register';
import User from './Components/User/User';

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/user">
            <User></User>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivetRoute path="/register/:work">
            <Register></Register>
          </PrivetRoute>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/adminvolunlist">
            <AdminVolunList></AdminVolunList>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
