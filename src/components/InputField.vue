<template>
    <div class="input-form">
        <label class="input-label">{{ label }}</label>
        <input class="input-field" :type="type" :name="name" />
    </div>
</template>

<script lang="ts">
    export default{
        props: {
            label: String,
            type: String,
            name: String
        }
    }
</script>

<style scoped>
    .input-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        margin: auto;
        width: 25rem;
    }
    .input-label {
        text-align: start;
        width: 150px;
        margin-right: 5px;
    }
    .input-field {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        border-radius: 0;
        box-shadow: none;
        padding: 10px;
    }
</style>