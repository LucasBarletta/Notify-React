import React from 'react';
import Header from './components/Header';
import './components/scss/App.scss';
import Sets from './components/Sets';
import Main from './components/Main';

const App =() => {
  return (
    <div className="App">
      <Header />
      <Sets />
      <Main />
    </div>
  );
}

export default App;
