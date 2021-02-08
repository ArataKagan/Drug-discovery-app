import React, {useState, useEffect} from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import Main from './Main';


function App() { 
  return (
    <div>
      <Login />
      <Logout />
      <Main />
    </div>
  );
}

export default App;
