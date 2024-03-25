<template>
    <fieldset class="result">
        <legend>
            <h2>Resultado:</h2>
        </legend>
        <div>{{ result }}</div>
  </fieldset>
</template>

<script setup>
    const props = defineProps({
        result: [String, Number],
    });
</script>

<style scoped>
    .result {
        padding: 1rem;
        border-style: solid;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>