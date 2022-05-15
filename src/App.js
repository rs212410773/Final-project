import './App.css';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from "./components/login";
import Courses from './components/courses';
import Customers from './components/customers';
import Bounuses from './components/bonuses';
// import NavTabs from './components/tab';

function App() {
  return (

    <React.StrictMode>
      <BrowserRouter>
        <Route path='/' component={Login} exact />
        {/* <Route path='/tab' component={NavTabs}  /> */}
        <Route path='/courses' component={Courses} />
        <Route path='/customers' component={Customers} />
        <Route path='/bonuses' component={Bounuses} />
      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;

