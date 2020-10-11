import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Link} from "react-router-dom";
import Home from './Components/Home';
import Search from './Components/Search'
import NavBar from './Components/NavBar';
import Favorites from './Components/Favourites';
import axios from 'axios';
function App() {

  return (
    <Router>
    <div className="App">
      <NavBar/>
    </div>
    <Route exact path="/home" component={Home} />
    <Route exact path='/search' render={()=><Search/>}/>
    <Route  path='/favorites' render={({match})=><Favorites match={match} />}/>
    {/* // <Route exact path={`/favorites/${id}`} render={({match})=><Favorites  />}/> */}
    
    </Router>
  );
}

export default App;
