import React from 'react';
import Finish from './Finish';

class Result extends React.Component {
  correctAnswer = () => {

  }

  responseResult = () => {
    if (this.correctAnswer()) {
      return <h1 className = 'correctAnswer'>Correct, nice job!</h1>
    } else {
      return <h1 className = 'wrongAnswer'>Sorry, that's not correct!</h1>
    }
  }

  render() {
    return (
      <div>
        {this.responseResult()}
        <button onClick={this.handleClick}>{this.props.quizComplete ? 'View Results' : 'Next Question'}</button>
      </div>
    )
  }
};

export default Result;