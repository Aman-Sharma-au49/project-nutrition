import { useState } from 'react';
import LogIn from './LogIn';
import Cardinfo from './Card';

import Navbar from './navbar';
import './App.css';
import Exercise from './Exercise';
import CardInfo from './Card';

function App() {

  return (
    <>
    <CardInfo/>
      <div>
        <header>
          <h1>Nutrition</h1>
        </header>
        <LogIn />
      </div>
   
      {/* <div className='side'>
        <Cardinfo />
      </div>
       */}
      <footer>
        <p><marquee><h3>2024 Nutrition App.</h3></marquee> </p>
      </footer>
    </>
  );
}

export default App;

