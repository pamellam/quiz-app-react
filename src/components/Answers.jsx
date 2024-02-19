import { useRef } from 'react';
/**
 * React functional component for displaying a list of answers.
 *
 * @param {string[]} answers - array of possible answers
 * @param {string} selectedAnswer - currently selected answer
 * @param {string} answerState - state of the answers, can be 'answered', 'correct', or 'wrong'
 * @param {function} onSelect - function to be called when an answer is selected
 * @returns {JSX.Element} - the answers list
 */
function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <div>
      <ul id="answers">
        {shuffledAnswers.current.map((answer) => {
          const isSelected = selectedAnswer === answer;
          let cssClass = '';

          if (answerState === 'answered' && isSelected) {
            cssClass = 'selected';
          }

          if (
            (answerState === 'correct' || answerState === 'wrong') &&
            isSelected
          ) {
            cssClass = answerState;
          }

          return (
            <li key={answer} className="answer">
              <button
                onClick={() => onSelect(answer)}
                className={cssClass}
                disabled={answerState !== ''}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Answers;
