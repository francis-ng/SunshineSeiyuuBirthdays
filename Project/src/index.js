import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import PeopleContainer from './components/PeopleContainer';
import './css/index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);
ReactDOM.render(
  <PeopleContainer />,
  document.getElementById('root')
);
