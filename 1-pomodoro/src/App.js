import React, { useRef, useState } from 'react';
import './App.css';

//helper function
function padTime(time) {
  return time.toString().padStart(2, '0');
}

export default function App() {
  const [title, setTitle] = useState('Let the timer begin!!!');
  const [timeLeft, setTimeLeft] = useState(12 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    // if (intervalRef.current !== null) return;

    setTitle('Timer has started!');
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        // reset the timer
        resetTimer();
        return 0;
      });
    }, 1000);
  };

  const stopTimer = () => {
    // if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    setTitle('Timer has stopped/paused!');
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTitle('Timer has been reset!');
    setTimeLeft(12 * 60);
    setIsRunning(false);
  };

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className='app'>
      <h2>{title}</h2>

      <div className='timer'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className='buttons'>
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        {isRunning && <button onClick={resetTimer}>Reset</button>}
      </div>
    </div>
  );
}
