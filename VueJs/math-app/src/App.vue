<script setup>
import { ref, computed } from "vue";
import Resultado from "./components/Resultado.vue";
import Inputs from "./components/Inputs.vue";

// Criando os estados reativos para os números e a operação
const num1 = ref(0);
const num2 = ref(0);
const operacao = ref("+");

// Computed para calcular automaticamente o resultado
const resultado = computed(() => {
  switch (operacao.value) {
    case "+":
      return num1.value + num2.value;
    case "-":
      return num1.value - num2.value;
    case "*":
      return num1.value * num2.value;
    case "/":
      return num2.value !== 0 ? num1.value / num2.value : "Erro";
    default:
      return 0;
  }
});
</script>

<template>
  <main>
    <Inputs v-model:num1="num1" v-model:num2="num2" />
    <Resultado :resultado="resultado" />
  </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
  }
</style>
