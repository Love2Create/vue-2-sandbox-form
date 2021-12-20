<template>
  <div class="form-mainDiv-stack">
    <h3>Fill Out This Form</h3>
    <FormTextField
      name="firstName"
      identifier="firstName"
      bodyText="First Name"
      @value-change="textEntered"
    />
    <FormSelect :choices="options" :start="1" @value-change="pickedOne" />
    <FormButton bodyText="submit" @value-change="buttonClicked" />
    <FormDate type="date" label="Date" @value-change="dateSelected" />
    <FormInputOption1
      :choices="spices"
      type="radio"
      name="spieces"
      title="PICK A SPICE"
    />
    <FormInputOption1
    :choices="spices"
    type="checkbox"
    title="PICK ALL THE SPIECES YOU WANT" />
    <FormTextarea class="form-mainDiv-stack" bodyText="Tell us all about Spices" identifier="Tell us about Spices" min-width="10em" max-width="3em"/>
  </div>
</template>

<script>
import FormTextField from "./components/FormTextField.vue";
import FormButton from "./components/FormButton.vue";
import FormSelect from "./components/FormSelect.vue";
import FormDate from "./components/FormDate.vue";
import FormInputOption1 from "./components/FormInputOption1.vue";
import FormTextarea from "./components/FormTextarea.vue";

export default {
  name: "App",
  components: {
    FormTextField,
    FormButton,
    FormSelect,
    FormDate,
    FormInputOption1,
    FormTextarea,
  },
  data() {
    return {
      options: ["apple", "orange", "banana"],
      selectedDate: "",
      spices: ["oregano", "pepper", "cumin", "rosemary"],
    };
  },
  methods: {
    dateSelected(e) {
      console.log("date: " + e);
    },
    buttonClicked() {
      console.log("clicked");
    },
    textEntered(e) {
      console.log(e);
    },
    pickedOne(e) {
      console.log(this.options[e]);
    },
  },
};
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>
