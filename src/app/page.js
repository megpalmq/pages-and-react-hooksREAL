"use client";

export default function Home() {
  let score= 0;

  function addToScore(){
    score++;
    console.log(score)
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
