<template>
  <div class="form-button-div">
    <button :type="type" @click="emitValue">{{ bodyText }}</button>
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