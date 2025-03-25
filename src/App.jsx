import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import rickRollImage from './assets/14-rickroll.jpg'
import './App.css'
import rickText from './assets/rickroll.txt'

function rickRollText (theInput){
  if(theInput == ""){
    return {rickText};
  }
  else {
    return "";
  }
}

function RandomNumber() {
  const [rand, setRand] = useState(0);

  return (
    <>
      <h2>Need a random number? Click below!</h2>
      <button onClick={() => setRand((rand) => (Math.floor(Math.random() * 10000000)))}>{rand}</button>
    </>
  );
}

function FunnyText () {
  const [innertext, setInnerText] = useState();

  return (
    <>
      <h2>Want to see some funny text? Click below!</h2>
      <button onClick={() => setInnerText((innertext) => rickRollText(innertext))}>Press Here</button>
      <p>{innertext}</p>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://youtu.be/dQw4w9WgXcQ?si=p6xz3-YA7OusLlHi" target="_blank">
          <img src={rickRollImage} className="logo react" alt="Rick Astley" />
        </a>
      </div>
      <h1>Vite + React + Rick Roll</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <RandomNumber />
      <FunnyText />
    </>
  )
}

export default App
