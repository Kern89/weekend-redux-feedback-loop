import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
// import for components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';


function App() {
   
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Daily Feedback Form</h1>
      </header>
      <Router>
        <Route exact path='/'>
          <Feeling />
        </Route>
        <Route exact path='/understanding'>
          <Understanding />
        </Route>
        <Route exact path='/support'>
          <Support />
        </Route>
        <Route exact path='/comments'>
          <Comments />
        </Route>
        <Route exact path='/review'>
          <Review />
        </Route>
        <Route exact path='/success'>
          <Success />
        </Route>
      </Router>
    </div>
  );
}

export default App;
