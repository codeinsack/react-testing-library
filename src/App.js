import React from 'react';
import './App.css';

import { FavoriteNumber } from "./components/FavoriteNumber"
import { GreetingLoader } from "./components/GreetingLoader"
import { HiddenMessage } from "./components/HiddenMessage"
import { ErrorBoundary } from "./components/ErrorBoundary"

function Bomb({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('Baaaaaaaaahhhhhhhhhm!')
  } else {
    return null
  }
}

function App() {
  return (
    <div className="App">
      <FavoriteNumber />
      <GreetingLoader />
      <HiddenMessage>Hidden message</HiddenMessage>
      <ErrorBoundary><Bomb /></ErrorBoundary>
    </div>
  );
}

export default App;
