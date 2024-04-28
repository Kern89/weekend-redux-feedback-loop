import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import './App.css';
import FeedbackRating from '../FeedbackRating/FeedbackRating';
// import for components

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <FeedbackRating />
      </header>
      <Router>
        <Route exact path='/feeling'>
        </Route>
        <Route exact path='/understanding'></Route>
        <Route exact path='/support'></Route>
        <Route exact path='/comments'></Route>
        <Route exact path='/review'></Route>
        <Route exact path='/success'></Route>
      </Router>
    </div>
  );
}

export default App;
