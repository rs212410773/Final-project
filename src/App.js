import './App.css';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './components/user/login';
import Courses from './components/managment/courses/courses';
import Customers from './components/managment/customers';
import Bounuses from './components/managment/bonuses';
import HomeUser from './components/user/homeUser';
import Pay from './components/user/pay';
import AboutUs from './components/user/aboutUs';
// import Char from './components/managment/char'

// import A from '../src/components/user/a';
function App() {
  return (

    <React.StrictMode>
      <BrowserRouter>
        <Route path='/' component={Login} exact />
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/courses' component={Courses} />
        <Route path='/customers' component={Customers} />
        <Route path='/bonuses' component={Bounuses} />
        <Route path='/homeUser' component={HomeUser} />
        <Route path='/pay' component={Pay} />
        <Route path='/aboutUs' component={AboutUs}/>

        {/* <Route path='/Char' component={Char} /> */}
        


      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;

