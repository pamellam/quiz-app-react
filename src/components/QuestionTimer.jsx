import { useState, useEffect } from 'react';

/**
 * React component for a question timer.
 *
 * @param {number} timeOut - The time in milliseconds before the timer expires.
 * @param {function} onTimeout - The function to call when the timer expires.
 * @param {string} mode - The CSS class to apply to the timer progress bar.
 * @returns {JSX.Element} The question timer component.
 */
const QuestionTimer = ({ timeOut, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  /**
   * Sets a timeout that calls the onTimeout function when the timer expires.
   */
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeOut);

    return () => clearTimeout(timer);
  }, [timeOut, onTimeout]);

  /**
   * Sets an interval that decrements the remaining time by 100 milliseconds.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      className={mode}
      id="question-time"
      max={timeOut}
      value={remainingTime}
    ></progress>
  );
};

export default QuestionTimer;
