import './App.css';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from "./components/login";
import Courses from './components/managment/courses/courses';
import Customers from './components/managment/customers';
import Bounuses from './components/managment/bonuses';

function App() {
  return (

    <React.StrictMode>
      <BrowserRouter>
        <Route path='/' component={Login} exact />
        <Route path='/courses' component={Courses} />
        <Route path='/customers' component={Customers} />
        <Route path='/bonuses' component={Bounuses} />
      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;

