import React from 'react';

// COMPONENTS
import QuestionCard from './components/QuestionCard';

// https://opentdb.com/api.php?amount=10

const App = () => {

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz App</h1>
      <button className="start" onClick={ startTrivia }>START</button>
      <p className="score">Score:</p>
      <p className="">Loading questions...</p>
      <QuestionCard />
      <button className="next" onClick={ nextQuestion }>Next question</button>
    </div>
  );
}

export default App;
