import React, { useState } from 'react';
import { render } from 'react-dom';
import Joke from './components/Joke';
import './index.html';
import './style.css';
import jokes from './jokes.js';


const App = () => {
 return (
   <>
   {jokes.map((item) => 
   <Joke
   key={item.id}
   userId={item.id}
   userName={item.name}
   text={item.text}
   likes={item.likes}
   dislikes={item.dislikes}/>
   )} 
   </>
 )
};

render(<App />, document.querySelector('#app'));
