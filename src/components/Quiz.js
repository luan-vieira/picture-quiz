import React from 'react';
import Question from './Question';
import questions from '../questions';

class Quiz extends React.Component {
	render() {
		return (
			<div className = 'studyWrapper'>
				<div className = 'studyContainer'>
					<h1 className = 'quizTitle'>Happy Anniversary! Can you remember when and where these pictures were taken?</h1>
						{questions.map( (currentQuestion, index) => 
							<Question 
								key={`q${index}`} 
								index={index} 
								details={currentQuestion}
								length={questions.length}
								quizComplete={this.props.quizComplete}
							/>
						)}
				</div>
			</div>
		);
	}
};

export default Quiz;