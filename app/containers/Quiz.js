import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import QuizQuestion from '../components/QuizQuestion';
import { onFail, onSuccess } from '../reducers/quiz';

class Quiz extends Component {
  static propTypes = {
    onFail: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
    question: PropTypes.shape({
      possibleAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
      question: PropTypes.string.isRequired,
      rightAnswer: PropTypes.number.isRequired,
    }).isRequired,
    score: PropTypes.number.isRequired,
  };

  render() {
    const {
      onFail,
      onSuccess,
      question,
      score,
    } = this.props;
    return (
      <div>
        <QuizQuestion
          onFail={onFail}
          onSuccess={onSuccess}
          question={question}
          score={score}
        />
      </div>
    );
  }
}

// TODO: Add score?
export default connect(state => ({
  question: state.quiz.currentQuestion,
  score: state.quiz.score,
}), { onFail, onSuccess })(Quiz);
