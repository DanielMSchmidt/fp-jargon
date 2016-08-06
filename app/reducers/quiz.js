import jargons from '../utils/jargons';

const ON_FAIL = 'quiz/ON_FAIL';
const ON_SUCCESS = 'quiz/ON_SUCCESS';

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

function chooseRandomQuestion(questions) {
  var questionKeys = Object.keys(questions);
  var index = Math.round(Math.random() * questionKeys.length);


  var possibleAnswers = [];
  while (possibleAnswers.length < 3) {
    var answerIndex = Math.round(Math.random() * questionKeys.length);
    if (answerIndex !== index) {
      possibleAnswers.push(questions[questionKeys[answerIndex]]);
    }
  }
  possibleAnswers.push(questions[questionKeys[index]])

  shuffle(possibleAnswers);

  var rightAnswer = possibleAnswers.indexOf(questions[questionKeys[index]]);

  return {
    possibleAnswers,
    question: questionKeys[index],
    rightAnswer,
  };
}

const defaultState = {
  currentQuestion: chooseRandomQuestion(jargons),
  questions: jargons,
  score: 0,
};

export default function quiz(state = defaultState, action) {
  switch (action.type) {
    case ON_FAIL:
      return {
        ...state,
        currentQuestion: chooseRandomQuestion(state.questions),
      };

    case ON_SUCCESS:
      return {
        ...state,
        currentQuestion: chooseRandomQuestion(state.questions),
        score: state.score + 1,
      };

    default:
      return state;
  }
}


// Actions
export function onFail() {
  return {
    type: ON_FAIL,
  };
}

export function onSuccess() {
  return {
    type: ON_SUCCESS,
  };
}
