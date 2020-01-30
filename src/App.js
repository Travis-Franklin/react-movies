import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movies.js';

function App() {
  return (
    <div>
      <Movie whatMovie='Squel Magnolias' />
      <Movie whatMovie='Everything Meryl Streep' />
      <Movie whatMovie='Chicago' />
    </div>
  );
}

export default App;
