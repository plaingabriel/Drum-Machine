import { useEffect, useState } from "react";

export const App = () => {

    const [text, setText] = useState('');

    // Execute the handleClick function with the keyboard
    useEffect (() => {
        document.addEventListener('keydown', (e) => {
            handleClick(e.key.toUpperCase());
        });
    }, []);

    const arr = [
      {
        keyCode: 81,
        text: "Q",
        src: "./clips/Heater-1.mp3",
        audio: "Heater 1"
      },
      {
        keyCode: 87,
        text: "W",
        src: "./clips/Heater-2.mp3",
        audio: "Heater 2"
      },
      {
        keyCode: 69,
        text: "E",
        src: "./clips/Heater-3.mp3",
        audio: "Heater 3"
      },
      {
        keyCode: 65,
        text: "A",
        src: "./clips/Heater-4.mp3",
        audio: "Heater 4"
      },
      {
        keyCode: 83,
        text: "S",
        src: "./clips/Clap.mp3",
        audio: "Clap"
      },
      {
        keyCode: 68,
        text: "D",
        src: "./clips/Open-HH.mp3",
        audio: "Open-HH"
      },
      {
        keyCode: 90,
        text: "Z",
        src: "./clips/Kick_n_Hat.mp3",
        audio: "Kick-n'-Hat"
      },
      {
        keyCode: 88,
        text: "X",
        src: "./clips/Kick.mp3",
        audio: "Kick"
      },
      {
        keyCode: 67,
        text: "C",
        src: "./clips/Closed-HH.mp3",
        audio: "Closed-HH"
      }
    ];

    const handleClick = (selector) => {
        // Trigger the audio
        const audio = document.getElementById(selector);
        audio.play();
        // Find the object of the selector
        const obj = arr.find((element) => element.text === selector);
        // Use the object to display the name of the sound
        setText(obj.audio);
    }

    return(
      <div id="drum-machine" className="vh-100 container-fluid">
        <div id="btn-group" className="p-3 bg-secondary rounded">
            {arr.map((drumPad) => {
                return(
                    <button
                    onClick={() => {handleClick(drumPad.text)}}
                    className='drum-pad btn btn-dark fw-bold fs-3'
                    key={drumPad.text} 
                    id={drumPad.audio}>
                    
                    {drumPad.text}
                    
                    <audio className="clip" 
                    id={drumPad.text} 
                    src={drumPad.src}>
                    </audio>
                    
                    </button>    
                )
          })}
        </div>
        <div id="display" className="border border-dark border-5 rounded text-white bg-secondary fw-bold fst-italic fs-3">{text}</div>
      </div>
    )
  }