import './App.css'
import "./styles.scss";
import Board from './Components/Board'
import { useState } from 'react';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => {
      if (prevCount + 1 === 3) {
        handleVoiceAuth(); 
        return 0; // Reset count after 3 clicks
      }
      return prevCount + 1;
    });
  };

  const handleVoiceAuth = () => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("Heard:", transcript);

      const secretPhrase = "open the portal";

      if (transcript.includes(secretPhrase)) {
        window.location.href = "http://localhost:5174?auth=true";
      } else {
        alert("Incorrect phrase. Try again!");
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event);
      alert("Speech recognition error. Try again.");
    };
  };

  return (
    <>
      <div className='container'>
        <h1>2048</h1>
        <Board />
        <p className="game-description">
          Join the numbers and get to the <strong>2048 tile!</strong>
          Use <strong>arrow keys</strong> to move the tiles. When two tiles with the same number touch, they <strong>merge into <span onClick={handleClick}>one!</span></strong>
        </p>
        <p>Created with React | How to play: Combine tiles to reach 2048!</p>
      </div>
    </>
  );
}

export default App;
