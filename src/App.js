import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/userCard/userCard'
import NavBar from './components/navbar/navbar'
import Routes from './components/Route/route'
import { BrowserRouter as Router } from 'react-router-dom'



function App() {
  return (
    <Router>

      <div className="App">
        <header className="App-header">
          
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <NavBar />
          <div className="horizontalPlacement">
          <UserCard />
          <Routes className="routeLocation"/>

          </div>
          

        </header>
      </div>
    </Router>


  );
}

export default App;
