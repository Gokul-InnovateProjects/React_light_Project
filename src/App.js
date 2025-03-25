import "./App.css";
import { useState } from "react";

function App() {
  const [red, setRed] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);

  return (
    <>
      <form>
        <div className="container">
          <h1>Traffic Light</h1>
          <div className="colors">
            <div className={red ? "red" : "white"}></div>
            <div className={yellow ? "yellow" : "white"}></div>
            <div className={green ? "green" : "white"}></div>
          </div>
        </div>
        <div className="light-button">
          <div
            className="button1"
            onClick={() => {
              setRed(true);
              setYellow(false);
              setGreen(false);
            }}
          >
            Stop
          </div>

          <div
            className="button2"
            onClick={() => {
              setRed(false);
              setYellow(true);
              setGreen(false);
            }}
          >
            Listen and Ready
          </div>

          <div
            className="button3"
            onClick={() => {
              setRed(false);
              setYellow(false);
              setGreen(true);
            }}
          >
            Go
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
