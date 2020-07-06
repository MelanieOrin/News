import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Login from './components/Login/Login.jsx';
import News from './components/News/News.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute.jsx';
import { PublicRoute } from './components/PublicRoute.jsx';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <PublicRoute component={Login} exact path="/" />
        <PrivateRoute component={News} exact path="/news" />
      </Router>
    </div>
  );
};

export default App;