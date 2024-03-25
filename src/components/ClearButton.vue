<template>
    <button @click="clearValues">Limpar</button>
</template>

<script setup>
    const props = defineProps({
        clearValues: Function,
    })
</script>

<style scoped>
    button {
        width: 100%;
        margin-top: 1rem;
        padding: 5px;
        cursor: pointer;
        background-color: #000;
        color: orangered;
        font-size: 1.5rem;
        border-color: transparent;
        transition: all .3s;
    }

    button:hover {
        background-color: rgb(63, 100, 6);
    }
</style>