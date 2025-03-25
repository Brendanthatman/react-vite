import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import rickRollImage from './assets/14-rickroll.jpg'
import './App.css'
import rickText from './assets/rickroll.txt'
import { createElement } from 'react'

const lyrics = [
  "We're no strangers to love",
  "You know the rules and so do I",
  "A full commitment's what I'm thinkin' of",
  "You wouldn't get this from any other guy",
  "I just wanna tell you how I'm feeling",
  "Gotta make you understand",
  "Never gonna give you up, never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry, never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "We've known each other for so long",
  "Your heart's been aching, but you're too shy to say it",
  "Inside, we both know what's been going on",
  "We know the game and we're gonna play it",
  "And if you ask me how I'm feeling",
  "Don't tell me you're too blind to see",
  "Never gonna give you up, never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry, never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "Never gonna give you up, never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry, never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "We've known each other for so long",
  "Your heart's been aching, but you're too shy to say it",
  "Inside, we both know what's been going on",
  "We know the game and we're gonna play it",
  "I just wanna tell you how I'm feeling",
  "Gotta make you understand",
  "Never gonna give you up, never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry, never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "Never gonna give you up, never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry, never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "Never gonna give you up, never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry, never gonna say goodbye",
  "Never gonna tell a lie and hurt you"
];


function rickRollText (){
  const thediv = document.getElementById('containerRickRoll');
  for (let lyric in lyrics) {
    const insertP = createElement("p");
    insertP.textContent = lyric;
    thediv.appendChild(insertP);
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
  const [innertext, setInnerText] = useState(false);

  return (
    <>
      <h2>Want to see some funny text? Click below!</h2>
      <button onClick={() => setInnerText(!innertext)}>{innertext ? 'Press for funny text' : 'Press to hide funny text'}</button>
      <div>
        {setInnerText && <div id='containerRickRoll'></div>}
      </div>
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
      <RandomNumber />
      <FunnyText />
    </>
  )
}

export default App
