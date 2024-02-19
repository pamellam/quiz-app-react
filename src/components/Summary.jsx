/**
 * @file Summary component for quiz results.
 */

import React from 'react';
import quziComplete from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

/**
 * Summary component for quiz results.
 * @param {array} userAnswers - Array of user answers.
 * @returns {JSX.Element} Summary component.
 */
const Summary = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare + correctAnswersShare;

  return (
    <div id="summary">
      <img src={quziComplete} alt="Trophy icon" />
      <h2> Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number"> {skippedAnswersShare}% </span>
          <span className="text"> Skipped questions </span>
        </p>
        <p>
          <span className="number"> {correctAnswersShare}% </span>
          <span className="text"> Correct answered</span>
        </p>
        <p>
          <span className="number"> {wrongAnswersShare}% </span>
          <span className="text"> Wrong answerd </span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}> {answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;