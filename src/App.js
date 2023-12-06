import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Model from './components/Model';
import Search from './components/Search';
import { useState, useContext } from 'react';
import { AppContext, AppProvider } from '../src/Context';


function App() {
   const {showModel} = useContext(AppContext);
  return (
    <div className="App">
      <Search/>
      {/* <Favorites/> */}
      
      <Meals/>
      {showModel && <Model/>}
    </div>
  );
}

export default App;
