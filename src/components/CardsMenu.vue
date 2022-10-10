<template>
  <div class="container">
    <div class="card">
      <img src="../assets/adicionar-material.svg" alt="adicionar material" />
      <h2>ADICIONAR MATERIAL</h2>
      <p>
        Adicione novos materiais de estudo e escolha em que pastas vão ficar
      </p>
    </div>
    <div class="card">
      <img src="../assets/acessar-material.svg" alt="adicionar material" />
      <h2>ACESSAR MATERIAIS</h2>
      <p>Veja e edite todos os materiais de estudo adicionados em sua conta</p>
    </div>
    <div class="card">
      <img src="../assets/definir-metas.svg" alt="adicionar material" />
      <h2>DEFINIR METAS</h2>
      <p>Adicione novas metas ao seu cronograma de estudos</p>
    </div>
    <div class="card">
      <img src="../assets/ver-metas.svg" alt="adicionar material" />
      <h2>VER TODAS AS METAS</h2>
      <p>
        Acesse as metas definidas por dia em seu cronograma e acompanhe o
        progresso diário
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-top: 12px;
  height: 240px;
  width: 160px;
  margin: 40px;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  border: 3px solid transparent
}

.card img {
  display: block;
  margin: 0 auto;
  color: #747474;
  width: 45px;
  height: 45px;
}

.card:hover {
  border-color: #0007AE;
}

.card h2 {
  text-align: center;
  padding-top: 12px;
  font-family: Roboto;
  font-size: 1.2em;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #747474;
}
.card p {
  text-align: center;
  padding: 12px 16px;
  font-family: Roboto;
  font-size: 0.85em;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.015em;
  text-align: center;
  color: #747474;
}
</style>
