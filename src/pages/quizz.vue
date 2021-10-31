<script setup>
import QuestionCard from '../components/question-card.js';
import AnswerCard from '../components/answer-card.vue';
import useGetQuestion from '../composables/useGetQuestion.js';
import shuffle from 'lodash.shuffle';
import capitalize from 'lodash.capitalize';
import {createApp, ref} from '@vue/runtime-dom';
import {reactive, toRefs} from 'vue';

const emit = defineEmits(['refresh']);
const {question, answer, wrongAnswers} = useGetQuestion();
const shuffledAnswers = shuffle([...wrongAnswers, answer]);

const checkAnswer = (ans, idx) => {
  const isCorrect = ans === answer;
  if (isCorrect) {
    state.correct = idx;
  } else {
    state.wrong.push(idx);
  }
};
const removeFirstElement = () => {
  const first100Wrong = JSON.parse(localStorage.first100Wrong);
  const rightAnswers = localStorage.rightAnswers ? JSON.parse(localStorage.rightAnswers) : [];
  const rightAnswer = first100Wrong.shift();
  localStorage.first100Wrong = JSON.stringify(first100Wrong);
  localStorage.rightAnswers = JSON.stringify([...rightAnswers, rightAnswer]);
};
const goToNexQuestion = () => {
  removeFirstElement();
  emit('refresh');
};

const state = reactive({
  correct: null,
  wrong: [],
});
let {correct, wrong} = toRefs(state);
</script>

<template>
  <div class="flex flex-col w-full h-full justify-center items-center border-2">
    <QuestionCard :wordToGuess="capitalize(question)" class="m-3 w-80" />
    <AnswerCard
      v-for="(ans, index) of shuffledAnswers"
      :possible-answer="capitalize(ans)"
      :key="ans"
      class="m-1 w-80"
      :class="{' bg-red-400': wrong?.includes(index), 'bg-green-400': correct === index}"
      @click="checkAnswer(ans, index)"
    />
    <button class="mt-6 p-3 w-60 border border-black disabled:opacity-50" :disabled="correct === null" @click="goToNexQuestion">
      Next
    </button>
  </div>
</template>
