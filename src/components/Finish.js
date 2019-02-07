import React from 'react';

class Finish extends React.Component {
  handleClick = () => {
    // do things
  }
  
  render() {
    // const percentage =  this.props.score / this.props.length;
    
    return (
      <div>
        <h1 className = 'scoreMessage'>You scored {/* this.props.score */} correct out of {/* this.props.length */} questions! { /* percentage > 0.75 ? 'Nice work!' : 'Better luck next time!' */}</h1>
        <button className = 'finishBtn' onClick ={ this.handleClick /* what to do here? this.props.endStudy.bind(this, this.state.score / questions.length * 100 ) */ }>Return to Quiz Page</button>
      </div>
    )
  }
};

export default Finish;