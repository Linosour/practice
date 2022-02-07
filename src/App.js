import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './views/Login.js';

import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ROOT = "/";
const views = [
  ROOT , 
  '/sign-in'
]


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<Login className="asdf"/>}/>
      </Routes>
    </div>
  );
}

export default App;
