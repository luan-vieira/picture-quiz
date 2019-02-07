import React from 'react';

class Answer extends React.Component {
  render() {
    return (
      <div className = 'answerContainer'>
        <p>{this.props.answer}</p>
      </div>
    )
  }
};

export default Answer;