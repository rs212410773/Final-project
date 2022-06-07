import './App.css';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from "./components/login";
import Courses from './components/managment/courses/courses';
import Customers from './components/managment/customers';
import Bounuses from './components/managment/bonuses';
import Exercise from './components/user/exercise';
import Diet from './components/user/diet';
import Instructions from './components/user/Instructions';
import AboutUs from './components/aboutUs'
function App() {
  return (

    <React.StrictMode>
      <BrowserRouter>
        <Route path='/' component={Login} exact />
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/courses' component={Courses} />
        <Route path='/customers' component={Customers} />
        <Route path='/bonuses' component={Bounuses} />
        <Route path='/exercise' component={Exercise} />
        <Route path='/diet' component={Diet} />
        <Route path='/instructions' component={Instructions} />
      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;

