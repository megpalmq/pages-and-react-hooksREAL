"use client";
import {useState} from 'react';

export default function Home() {
  //let score= 0;
  const scoreState= useState();
  const score = scoreState[0];

  console.log(scoreState);

  function addToScore(){
    //score++;
    console.log('score');
  }

  return (
    <main>
      <h1>Home</h1>
      <div>
      <button onClick={addToScore}>Add 1</button>
      <p>Score: 0</p>

      </div>
    </main>
  );
}
