import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://http://localhost:3000/'
})

function App() {
  return (
    <h1>Shots & Reels</h1>
  );
}

export default App;
