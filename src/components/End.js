import React, { useEffect, useState } from 'react';



const End = ({ results, data, onReset, onAnswersCheck }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
// eslint-disable-next-line  
}, []);

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Your Result</h3>
          <p>{correctAnswers} out of {data.length} questions are correct.</p>
          <p><strong>Precent Score: {Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
         
          <button className="button is-info mr-2" onClick={onAnswersCheck}>Check your answers</button>
          <button className="button is-success" onClick={onReset}>Try again</button>
        </div>
      </div>
    </div>
  );
}

export default End;