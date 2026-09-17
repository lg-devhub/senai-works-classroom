<script setup></script>

<template>
  <div class="inicio">
    <div class="hero">
      <div class="hero-text">
        <span class="tag">ADOÇÃO RESPONSÁVEL</span>

        <h1>Encontre um novo amigo</h1>

        <p>
          O Patas do Vale conecta animais que procuram uma família
          com pessoas interessadas em oferecer um lar cheio de carinho.
        </p>

        <p>
          Conheça nossos animais disponíveis e descubra como se preparar
          para receber um novo companheiro.
        </p>

        <router-link to="/Animais" class="btn">
          Conhecer os animais
        </router-link>
      </div>

      <div class="hero-image">
        <div class="image-content">

          <strong>ADOTE UM AMIGO</strong>
          <small>Uma nova história começa aqui.</small>
        </div>
      </div>
    </div>

    <div class="cards">
      <div class="info-card">
        <span>💚</span>
        <h3>Adoção consciente</h3>
        <p>
          Adote com responsabilidade, cuidado e planejamento.
        </p>
      </div>

      <div class="info-card">
        <span>🐾</span>
        <h3>Animais acolhidos</h3>
        <p>
          Todos os animais recebem atenção enquanto aguardam uma família.
        </p>
      </div>

      <div class="info-card">
        <span>🏠</span>
        <h3>Nova família</h3>
        <p>
          Uma adoção responsável pode transformar diferentes vidas.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inicio {
  max-width: 1050px;
  margin: 0 auto;
  padding: 65px 25px;
}

/* HERO */

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px;
  align-items: center;
}

.hero-text {
  max-width: 500px;
}

.tag {
  display: inline-block;
  padding: 5px 10px;
  margin-bottom: 12px;

  border-radius: 20px;
  background: #dcefe9;
  color: #21765e;

  font-size: 15px;
  font-weight: 700;
}


.hero h1 {
  margin-bottom: 15px;
  font-family: "Marck Script", cursive;
  color: #176b55;
  font-size: 68px;
  line-height: 1.1;
}

.hero p {
  margin-bottom: 12px;

  color: #60736d;
  font-size: 25px;
  line-height: 1.7;
}

.btn {
  display: inline-block;
  margin-top: 12px;
  padding: 12px 20px;

  border-radius: 6px;
  background: #176b55;
  color: white;

  font-size: 21px;
  font-weight: 600;

  transition: 0.2s;
}

.btn:hover {
  background: #0f5745;
  transform: translateY(-2px);
}

/* IMAGEM */

.hero-image {
  height: 290px;
  border-radius: 12px;
  background-image:url("/src/assets/main-dog.jpg");
  filter: brightness(80%);
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 12px 30px rgba(23, 107, 85, 0.15);
  overflow: hidden;
}

.image-content {
  text-align: center;
  color: #684a1e;
}

.image-content span {
  display: block;
  font-size: 100px;
  margin-bottom: 5px;
}

.image-content strong {
  display: block;
  font-size: 28px;
  filter: brightness(180%);
}

.image-content small {
  display: block;
  margin-top: 5px;
  filter: brightness(180%);
}

/* CARDS */

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 55px;
}

.info-card {
  padding: 22px;

  background: white;
  border: 1px solid #e0ebe7;
  border-radius: 9px;

  box-shadow: 0 4px 15px rgba(23, 80, 65, 0.06);

  transition: 0.2s;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 22px rgba(23, 80, 65, 0.1);
}

.info-card span {
  font-size: 25px;
}

.info-card h3 {
  margin: 12px 0 8px;

  color: #246c59;
    font-family: "Marck Script", cursive;
  font-size: 35px;
}

.info-card p {
  color: #71817c;
  font-size: 23px;
  line-height: 1.5;
}

/* RESPONSIVO */

@media (max-width: 750px) {
  .inicio {
    padding: 40px 20px;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .hero h1 {
    font-size: 32px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .hero-image {
    height: 230px;
  }
}
</style>
