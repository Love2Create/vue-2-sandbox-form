<template>
  <div class="form-mainDiv-stack">
    <h3>Fill Out This Form</h3>
    <FormTextField name="firstName" identifier="firstName" bodyText="First Name" @value-change="textEntered"/>
    <FormSelect :choices="options" :start="1" @value-change="pickedOne" />
    <FormButton bodyText="submit" @value-change="buttonClicked" />
    <FormDate type="date" label="Date" @value-change="dateSelected"/>
  </div>
</template>

<script>
import FormTextField from "./components/FormTextField.vue";
import FormButton from "./components/FormButton.vue";
import FormSelect from "./components/FormSelect.vue";
import FormDate from "./components/FormDate.vue";

export default {
  name: 'App',
  components: {
    FormTextField,
    FormButton,
    FormSelect,
    FormDate,
  },
  data(){
    return{
      options:[
        "apple", "orange", "banana"
      ],
      selectedDate:"",
    }
  },
  methods:{
    dateSelected(e){
      console.log("date: "+e);
    },
    buttonClicked(){
      console.log("clicked");
    },
    textEntered(e){
      console.log(e);
    },
    pickedOne(e){
      console.log(this.options[e]);
    }
  }
}
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>
