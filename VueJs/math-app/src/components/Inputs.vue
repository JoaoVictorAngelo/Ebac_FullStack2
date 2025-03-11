<script setup>
defineProps(["num1", "num2", "operacao"]);
defineEmits(["update:num1", "update:num2", "update:operacao"]);
</script>

<template>
    <div class="entrada">
        <label> Número 1:
            <input type="number" :value="num1" @input="$emit('update:num1', +$event.target.value)">
        </label>

        <label> Operação:
            <select :value="operacao" @change="$emit('update:operacao', $event.target.value)">
                <option value="+" selected>+</option>
                <option value="-">-</option>
                <option value="*">×</option>
                <option value="/">÷</option>
            </select>
        </label>

        <label> Número 2:
            <input type="number" :value="num2" @input="$emit('update:num2', +$event.target.value)">
        </label>
    </div>
</template>

<style scoped>
.entrada {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

input {
    padding: 5px;
    font-size: 16px;
}

select {
    padding: 5px;
    font-size: 16px;
}
</style>
