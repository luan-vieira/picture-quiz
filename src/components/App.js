import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Quiz from './Quiz';


class App extends React.Component {
  state = {
    score: 0,
    quizComplete: false
  };

  render() {
    return (
      <div className="App">
        <Quiz quizComplete={this.state.quizComplete} />
      </div>
    );
  }
}

export default App;
