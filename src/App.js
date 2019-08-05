import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import routes from '@routes/index';

function App() {
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
