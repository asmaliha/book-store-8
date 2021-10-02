import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Writer from './components/Writer/Writer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Writer></Writer>
    </div>
  );
}

export default App;
