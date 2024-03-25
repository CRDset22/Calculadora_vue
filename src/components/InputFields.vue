<template>
    <fieldset class="values">
        <legend>
            <h2>Digite aqui os valores</h2>
        </legend>
        <div class="row">
            <label for="number-x">X:</label>
            <input 
                type="number" 
                id="number-x" 
                :value="props.valueX" 
                @change="props.setValueX(Number($event.target.value))"
            />
        </div>
        <div class="row">
            <label for="number-y">y:</label>
            <input 
                type="number" 
                id="number-y"
                :value="props.valueY"
                @change="props.setValueY(Number($event.target.value))"
            />
        </div>
    </fieldset>
</template>

<script setup>
    const props = defineProps({
        valueX: Number,
        setValueX: Function,
        valueY: Number,
        setValueY: Function,
    });
</script>

<style scoped>
    label {
        width: 5%;
        font-size: 1.2rem;
        margin-right: 1rem;
    }

    input {
        width: 95%;
        padding: 5px
    }

    .values {
        padding: 1rem;
        border-style: solid;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>