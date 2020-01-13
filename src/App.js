import React from 'react';
import './App.css';

import { FavoriteNumber } from "./components/FavoriteNumber"
import { GreetingLoader } from "./components/GreetingLoader"

function App() {
  return (
    <div className="App">
      <FavoriteNumber />
      <GreetingLoader />
    </div>
  );
}

export default App;
