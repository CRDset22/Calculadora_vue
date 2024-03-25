<template>
    <fieldset class="operators">
        <legend>
            <h2>Selecione o operador</h2>
        </legend>
        <select
            name="operadores"
            :value="props.value"
            @change="props.setValue($event.target.value)"
        >
            <option value="">Selecionar operador</option>
            <option value="soma">Soma</option>
            <option value="subtracao">Subtração</option>
            <option value="multiplicacao">Multiplicação</option>
            <option value="divisao">Divisão</option>
        </select>
    </fieldset>
</template>

<script setup>
    const props = defineProps({
        value: String,
        setValue: Function,
    });
</script>

<style scoped>
    select {
        width: 100%;
        padding: 5px;
    }
    .operators {
        padding: 1rem;
        border-style: solid;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>