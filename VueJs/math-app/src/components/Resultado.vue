<script setup>
defineProps(["resultado"]);
</script>

<template>
    <div class="painel">
        <span>{{ resultado }}</span>
    </div>
</template>

<style scoped>
.painel {
    width: 200px;
    height: 50px;
    background: #222;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-radius: 5px;
}
</style>
