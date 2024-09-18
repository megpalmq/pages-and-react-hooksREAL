"use client";
import {useState} from 'react';

export default function Home() {
  //let score= 0;
  const [score, setScore]= useState(1);

  //Deconstructing arrays:
  //1. the variable names used for the items doesnt matter

  console.log(score);

  function addToScore(){
    //score++;
    setScore(score+1);
    console.log('score');
  }
  function doublePoints(){
    addToScore();
    addToScore();
  }

  return (
    <main>
      <h1>Home</h1>
      <div>
      <button onClick={addToScore}>Add 1</button>
      <button onClick={doublePoints}>Add 2</button>
      <p>Score: 0</p>

      </div>
    </main>
  );
}
