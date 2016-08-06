import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './QuizQuestion.css';
import classNames from 'classnames';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: false,
    };
  }
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

  onClick(correct) {
    const {
      onFail,
      onSuccess,
    } = this.props;

    this.setState({
      showAnswer: true,
    });

    setTimeout(function() {
      this.setState({
        showAnswer: false,
      });
      correct ? onSuccess() : onFail();
    }.bind(this), 1000);
  }

  render() {
    const {
      question: {
        possibleAnswers,
        question,
        rightAnswer,
      } = {},
      score,
    } = this.props;
    const showAnswer = this.state.showAnswer;

    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h2>{question}</h2>
        <div className={styles.score}>
          <h3>Score: {score}</h3>
        </div>
        <ul>
          {possibleAnswers.map((answer, index) => (
            <li className={classNames(styles.listItem, {
              [styles.correctListItem]: showAnswer && index === rightAnswer,
              [styles.wrongListItem]: showAnswer && index !== rightAnswer,
            })}>
              <a onClick={this.onClick.bind(this, index === rightAnswer)}>
                {answer}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default QuizQuestion;
