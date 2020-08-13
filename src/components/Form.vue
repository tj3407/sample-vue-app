<template>
    <form>
        <h1>{{ title }}</h1>
        <InputField label="Email" name="email" id="email" type="email" />
        <InputField label="First Name" name="firstName" type="text" />
        <InputField label="Last Name" name="lastName" type="text" />
        <InputField label="Country" name="country" type="text" />
        <InputField label="Company" name="company" type="text" />
        <InputField label="Password" name="password" type="password" />
        <InputField label="Confirm Password" name="confirmPassword" type="password" />
        <button v-bind:disabled="isButtonDisabled">Button</button>
    </form>
</template>

<script>
import InputField from "./InputField";

export default {
    props: {
        title: String,
        isButtonDisabled: Boolean
    },
    components: {
        InputField
    }
}
</script>

<style scoped>
    form {
        text-align: center;
    }
</style>