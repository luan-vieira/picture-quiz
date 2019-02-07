import React from 'react';
import Answer from './Answer';
import Result from './Result';

class Question extends React.Component {
  handleClick = () => {
    // Should also update quizComplete state as necessary

    // Play with the following CSS id's to figure out which to apply and how
    // '#correctWinner', '#wrongWinner', '#correctLoser', '#wrongLoser'

    return (
      <div className = 'messageDiv'>
        <Result quizComplete={this.props.quizComplete} />
      </div> 
    )
  }

  render() {
    const {questionTitle, correctAnswer, answers} = this.props.details;
    
    return (
      <div>
        <h3 className = 'quizLength'>Question {this.props.index} of {this.props.length}</h3>
        <h1 className = 'questionTitle'>{questionTitle}</h1>
        <ul>
          {answers.map( (answer, index) =>
            <Answer 
              key={`a${index}`}
              onClick={this.handleClick}
              answer={answer}
              correctAnswer={correctAnswer}
            />
          )}
        </ul>
      </div>
    ) 
  }
};

export default Question;
