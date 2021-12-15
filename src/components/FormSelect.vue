<template>
  <div class="form-select-div">
    <select v-model="value" @change="emitValue">
      <option v-for="(choice, index) in choices" :key="choice" :value="index">
        {{ choice }}
      </option>
    </select>
  </div>
</template>

<script>
import BaseFormElement from "./BaseFormElement.js";

export default {
  extends: BaseFormElement,

  created() {
    this.value = this.start;
  },

  props: {
    choices: {
      type: Array,
      required: true,
    },
    start:{
      type: Number,
      default: 0,
    }
  },
};
</script>

<style>
</style>