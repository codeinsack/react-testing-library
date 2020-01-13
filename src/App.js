import React from 'react';
import './App.css';

import { FavoriteNumber } from "./components/FavoriteNumber"
import { GreetingLoader } from "./components/GreetingLoader"
import { HiddenMessage } from "./components/HiddenMessage"

function App() {
  return (
    <div className="App">
      <FavoriteNumber />
      <GreetingLoader />
      <HiddenMessage>Hidden message</HiddenMessage>
    </div>
  );
}

export default App;
