<template>
  <button class="p-3 rounded border-black text-center border-2">{{ possibleAnswer }}</button>
</template>

<script>
export default {
  props: {
    possibleAnswer: {
      type: String,
      required: true,
    },
  },
};
</script>
