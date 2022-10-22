<template>
  <div class="not-found">
    <div>
      <h1>Parece que essa página não existe</h1>
      <p>Verifique o endereço e tente novamente</p>
    </div>
    <img
      src="../assets/not-found.svg"
      alt="pessoa com deficiência visual atravessando uma rua"
    />
  </div>
</template>

<script setup>
</script>

<style scoped>
.not-found,
.not-found > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
}

.not-found {
  width: 100%;
  height: 100vh;
}

.not-found > div {
  row-gap: 5px;
}

.not-found img {
  max-width: 550px;
  object-fit: cover;
  object-position: center;
}

h1{
    color: var(--blue);
}

p{
    font-size: 1.15em;
}
</style>
