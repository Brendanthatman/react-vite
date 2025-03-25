import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import rickRollImage from './assets/14-rickroll.jpg'
import './App.css'
import { createElement } from 'react'

const bestSongs = [
  {rank: 1, title: "Never Gonna Give You Up", link: "https://youtu.be/dQw4w9WgXcQ?si=p6xz3-YA7OusLlHi"},
  {rank: 2, title: "Buddy Holly", link: "https://youtu.be/kemivUKb4f4?si=GKCe4EUrPDGhjCct"},
  {rank: 3, title: "Love Story", link: "https://youtu.be/8xg3vE8Ie_E?si=SfvaRizTkIha-u0O"}
];

function RandomNumber() {
  const [rand, setRand] = useState(0);

  return (
    <>
      <h2>Need a random number? Click below!</h2>
      <button onClick={() => setRand((rand) => (Math.floor(Math.random() * 10000000)))}>{rand}</button>
    </>
  );
}

function BestSongsEver() {
  const listSongs = bestSongs.map(song =>
    <>
    <tr>
      <td>{song.rank}</td>
      <td>{song.title}</td>
      <td><a href={song.link}>YouTube Link</a></td>
    </tr>
    </>
  );

  return (
    <div>
      <h2>A List of the Best Songs Ever</h2>
      <table id='favoritesTable'>
        {listSongs}
      </table>
    </div>
  );
}

function FunnyText() {
  const [innertext, setInnerText] = useState(false);

  return (
    <>
      <h2>Want to see some funny text? Click below!</h2>

      <button onClick={() => setInnerText(!innertext)}>{innertext ? 'Press to hide funny text' : 'Press for funny text'}</button>
      <div>
        {innertext && <div id='containerRickRoll'>
          {/*AI used to put P tags on every line. AI Model: ChatGPT*/}
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
      <BestSongsEver />
      <FunnyText />
    </>
  )
}

export default App
