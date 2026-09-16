<script setup></script>

<template>
  <div class="cuidados">
    <header class="titulo">
      <span>ANTES DA ADOÇÃO</span>
      <h1>Cuidados importantes</h1>
      <p>
        Alguns cuidados são essenciais para oferecer uma boa vida ao seu novo amigo.
      </p>
    </header>

    <div class="cuidados-grid">
      <article class="cuidado">
        <div class="icone">🏠</div>
        <h2>Prepare o ambiente</h2>
        <p>
          Organize um espaço seguro, confortável e adequado para receber o animal.
        </p>
      </article>

      <article class="cuidado">
        <div class="icone">🍽️</div>
        <h2>Alimentação</h2>
        <p>
          Escolha uma alimentação adequada à idade, porte e necessidades do animal.
        </p>
      </article>

      <article class="cuidado">
        <div class="icone">🩺</div>
        <h2>Saúde</h2>
        <p>
          Mantenha vacinas, consultas e acompanhamento veterinário em dia.
        </p>
      </article>

      <article class="cuidado">
        <div class="icone">❤️</div>
        <h2>Carinho e atenção</h2>
        <p>
          Dedique tempo, paciência e carinho para construir uma relação de confiança.
        </p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.cuidados {
  max-width: 950px;
  margin: 0 auto;
  padding: 55px 25px;
}

.titulo {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 40px;
}

.titulo span {
  display: inline-block;
  padding: 5px 11px;

  border-radius: 20px;
  background: #dcefe9;
  color: #24755f;

  font-size: 10px;
  font-weight: 700;
}

.titulo h1 {
  margin-top: 9px;
  color: #176b55;
  font-size: 32px;
}

.titulo p {
  margin-top: 9px;
  color: #74837e;
  font-size: 14px;
  line-height: 1.6;
}

.cuidados-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.cuidado {
  padding: 25px;

  background: white;
  border: 1px solid #e0ebe7;
  border-radius: 10px;

  box-shadow: 0 5px 18px rgba(23, 80, 65, 0.06);

  transition: 0.2s;
}

.cuidado:hover {
  transform: translateY(-4px);
  border-color: #c8e3da;
}

.icone {
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: #e5f2ed;

  font-size: 23px;
}

.cuidado h2 {
  margin: 15px 0 8px;

  color: #245e4e;
  font-size: 18px;
}

.cuidado p {
  color: #71817c;
  font-size: 13px;
  line-height: 1.6;
}

@media (max-width: 650px) {
  .cuidados {
    padding: 40px 18px;
  }

  .cuidados-grid {
    grid-template-columns: 1fr;
  }
}
</style>
