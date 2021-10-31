import {onMounted} from '@vue/runtime-core';

export default function useGetQuestion() {
  const wrongWords = JSON.parse(localStorage.first100Wrong);
  const question = wrongWords[0]['Nl-NL'];
  const answer = wrongWords[0]['En-US'];
  const wrongAnswers = [wrongWords[0]['En-US wrong1'], wrongWords[0]['En-US wrong2'], wrongWords[0]['En-US wrong3']];
  return {question, answer, wrongAnswers};
}
