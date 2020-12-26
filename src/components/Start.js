import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Welcome to the Quiz</h1>
          <ul align="left">
              <li>The quiz consists of 5 multi-choice questions.</li>
              <li>Every question has a single correct answer.</li>
              <li>At the end of quiz, you'll be notified with your total score, time taken and final precent.</li>
              <li>To start the quiz, click the 'Start' button.</li>
          </ul>
          <p>Good luck!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Start;