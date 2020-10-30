import React from 'react';

import '../App.scss';
import '../reset.css';
import Header from './Header'
import MemeGenerator from './MemeGenerator';


function App() {
  return (
    <div className="App">
      < Header />
      < MemeGenerator />
    </div>
  );
}

export default App;
