<template>
  <div class="form-el-div-stack">
    <label class="formLabel">{{ label }}</label>
    <input :type="type" v-model="value" @change="emitValue">
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