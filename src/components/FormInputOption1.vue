<template>
  <div>
    <p class="formLabel">{{ title }}</p>
    <div>
    <label v-for="(choice, index) in choices" :key="choice" :for="choices[index]">
      {{ choice }}
      <input
        class="formRadioBtn-textLabel"
        :type="type"
        :id="choice"
        :name="name"
        :value="choice"
      >
    </label>
    </div>
  </div>
</template>

<script>
import BaseFormElement from "./BaseFormElement.js";

export default {
  extends: BaseFormElement,

  props: {
    choices: {
      type: Array,
      required: true,
    },
    title:{
      type: String,
      default: "title",
    }
  },
};
</script>

<style>
</style>