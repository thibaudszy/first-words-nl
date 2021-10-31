import {h} from 'vue';

const QuestionCard = (props) => {
  return h('div', {class: 'font-semibold border-4 border-yellow-700 p-4 text-center'}, props.wordToGuess);
};
QuestionCard.props = {
  wordToGuess: {
    type: String,
    required: true,
  },
};

export default QuestionCard;
