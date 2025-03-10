<script setup>
import { reactive } from 'vue';

const nome = "João"
const objExemplo = {
  carro: "Fusca",
  marca: "VolkWagen",
  conservacao: "Restaurado"
}

function dizOi(nome) {
  return `${nome} diz Oi`
}

const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferencia: 0,
  nomes: ["Matheus","Marcos","Mathias","Manoel"],
  nomeAInserir: "",
})

function incrementar() {
  estado.contador++;
}

function decrementar() {
  estado.contador--;
}

const btnEstaDesabilitado = false

const imgDoPicaPau = "https://pbs.twimg.com/media/Eg_qniOXsAIQ4_C.jpg"
const imgDoLeoncio = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQhdRpxV10XbVYHp4z_cwzMUcEEPUesYCjA&s"
const gostaDoPicapau = false
const gostaDoLeoncio = true

const maiorIdade = false
const responsavelLegal = true

function alteraEmail(evento) {
  estado.email = evento.target.value
}

function saldoFinal() {
  const { saldo, transferencia } = estado;
  return saldo - transferencia
}

function validaTransferencia() {
  const { saldo, transferencia } = estado;
  return saldo >= transferencia
}

function cadastraNome() {
  if (estado.nomeAInserir.length >= 3) {
    estado.nomes.push(estado.nomeAInserir);
  } else {
    alert("O nome deve conter mais que 3 Caracteres")
  }
}

</script>

<template>
  <h1>{{ nome }}</h1>
  <h1>{{ objExemplo.carro }}</h1>
  <h1>{{ dizOi('Paulo') }}</h1>

<!-- Exemplo de utilização de diretivas condicionais (v-if e v-else-if) 
para exibir imagens com base nas preferências do usuário -->

  <img v-if="gostaDoPicapau":src="imgDoPicaPau" alt="Pica-Pau em desenho">
  <img v-else-if="gostaDoLeoncio" :src="imgDoLeoncio" alt="Leoncio do desenho Pica-Pau">
  <h2 v-else>Nao gosta do desenho Pica-Pau</h2>

  <h2 v-if="maiorIdade">Pode entrar</h2>
  <h2 v-else-if="responsavelLegal">Pode entrar, esta acompanhado de um responsavel legal</h2>
  <h2 v-else>Nao pode entrar, nao tem idade e nao está acompanhado</h2>

  <button :disabled="btnEstaDesabilitado">enviar msg</button>
  </br>
  <hr>
  {{ estado.contador }}
  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>
</br>
<hr>

{{ estado.email }}
<input type="email" @keyup="alteraEmail">
</br>
<hr>

saldo: {{ estado.saldo }}<br/>
Transferindo: {{ estado.transferencia }}<br/>
Saldo Final: {{ saldoFinal() }}<br/>
<input :class="{ invalido: !validaTransferencia()}" @keyup="evento => estado.transferencia = evento.target.value" type="number" placeholder="Insira um valor para transferir">
<button v-if="validaTransferencia()">Transferir</button>
<span v-else>Valor maior que o saldo disponivel</span>
<br/>
<hr>

<ul>
  <li v-for="nome in estado.nomes">
    {{ nome }}
  </li>
</ul>
<input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Insira um nome">
<button @click="cadastraNome" type="button">Cadastrar nome</button>
</template>

<style scoped>
  img {
    max-width: 200px;
  }

  .invalido {
    outline-color: red;
    border-color: red;
  }
</style>
