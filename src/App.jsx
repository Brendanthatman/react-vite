import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import rickRollImage from './assets/14-rickroll.jpg'
import './App.css'
import rickText from './assets/rickroll.txt'
import { createElement } from 'react'

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

      <button onClick={() => setInnerText(!innertext)}>{innertext ? 'Press to hide funny text' : 'Press for funny text'}</button>
      <div>
        {innertext && <div id='containerRickRoll'>
          <p>We're no strangers to love</p>
          <p>You know the rules and so do I</p>
          <p>A full commitment's what I'm thinkin' of</p>
          <p>You wouldn't get this from any other guy</p>
          <p>I just wanna tell you how I'm feeling</p>
          <p>Gotta make you understand</p>
          <p>Never gonna give you up, never gonna let you down</p>
          <p>Never gonna run around and desert you</p>
          <p>Never gonna make you cry, never gonna say goodbye</p>
          <p>Never gonna tell a lie and hurt you</p>
          <p>We've known each other for so long</p>
          <p>Your heart's been aching, but you're too shy to say it</p>
          <p>Inside, we both know what's been going on</p>
          <p>We know the game and we're gonna play it</p>
          <p>And if you ask me how I'm feeling</p>
          <p>Don't tell me you're too blind to see</p>
          <p>Never gonna give you up, never gonna let you down</p>
          <p>Never gonna run around and desert you</p>
          <p>Never gonna make you cry, never gonna say goodbye</p>
          <p>Never gonna tell a lie and hurt you</p>
          <p>Never gonna give you up, never gonna let you down</p>
          <p>Never gonna run around and desert you</p>
          <p>Never gonna make you cry, never gonna say goodbye</p>
          <p>Never gonna tell a lie and hurt you</p>
          <p>We've known each other for so long</p>
          <p>Your heart's been aching, but you're too shy to say it</p>
          <p>Inside, we both know what's been going on</p>
          <p>We know the game and we're gonna play it</p>
          <p>I just wanna tell you how I'm feeling</p>
          <p>Gotta make you understand</p>
          <p>Never gonna give you up, never gonna let you down</p>
          <p>Never gonna run around and desert you</p>
          <p>Never gonna make you cry, never gonna say goodbye</p>
          <p>Never gonna tell a lie and hurt you</p>
          <p>Never gonna give you up, never gonna let you down</p>
          <p>Never gonna run around and desert you</p>
          <p>Never gonna make you cry, never gonna say goodbye</p>
          <p>Never gonna tell a lie and hurt you</p>
          <p>Never gonna give you up, never gonna let you down</p>
          <p>Never gonna run around and desert you</p>
          <p>Never gonna make you cry, never gonna say goodbye</p>
          <p>Never gonna tell a lie and hurt you</p>
          </div>}
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
