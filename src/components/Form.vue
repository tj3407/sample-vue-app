<template>
  <form>
    <h1>{{ title }}</h1>
    <InputField
      v-for="field in fields"
      :key="field.name"
      :label="field.label"
      :name="field.name"
      :type="field.type"
    />
    <button v-bind:disabled="isButtonDisabled">Button</button>
  </form>
</template>

<script>
import InputField from "./InputField";
import enrollmentFields from "../metadata/enrollment";

export default {
  data() {
    return {
      fields: enrollmentFields,
    };
  },
  props: {
    title: String,
    isButtonDisabled: Boolean,
  },
  components: {
    InputField,
  },
};
</script>

<style scoped>
form {
  text-align: center;
}
</style>