<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import quizz from './pages/quizz.vue';
import first100Words from './assets/0-100.json';
import setUpGame from './composables/useSetUpGame';
import {ref} from 'vue';

setUpGame(JSON.stringify(first100Words));

const resetQuizz = () => {
  localStorage.removeItem('first100Wrong');
  localStorage.removeItem('rightAnswers');
  setUpGame(JSON.stringify(first100Words));
};

let quizzKey = ref(1234);
</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center">
    <quizz :key="quizzKey" @refresh="quizzKey++" class="flex-1" />
    <button class="mb-3 border border-red-500 text-red-500 p-4 rounded" @click="resetQuizz">Reset quizz</button>
  </div>
</template>
