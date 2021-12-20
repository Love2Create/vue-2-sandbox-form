<template>
  <div>
      <label :for="identifier">{{ bodyText }}</label>
<textarea class="textAreaSpec" :id="identifier" :name="identifier">
    </textarea>
      </div>
</template>

<script>
import BaseFormElement from "./BaseFormElement.js";

export default {
    extends: BaseFormElement,

}
</script>

<style>

</style>