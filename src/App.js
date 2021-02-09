import React, {useState, useEffect} from 'react';
import GoogleLogin from './components/GoogleLogin';
import Main from './Main';


function App() { 
  return (
    <div>
      <GoogleLogin />
      <Main />
    </div>
  );
}

export default App;
