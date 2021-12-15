<template>
  <div class="form-el-div-stack">
      <input class="formTextInput" :type="type" :name="name" :id="identifier" v-model="value" @keyup="emitValue">
      <label class="formLabel" :label="label" :for="identifier">{{ bodyText }}</label>
  </div>
</template>

<script>
import BaseFormElement from "./BaseFormElement.js";

export default {
    extends: BaseFormElement,
};
</script>

<style>
</style>