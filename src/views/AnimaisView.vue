<script setup></script>

<template>
  <div class="animais">
    <header class="titulo">
      <span>ESPERANDO UMA FAMÍLIA</span>
      <h1>Animais disponíveis</h1>
      <p>Conheça alguns animais disponíveis para adoção.</p>
    </header>

    <div class="animais-grid">

      <article class="animal-card">
        <div class="animal-foto cachorro">
          🐶
        </div>

        <div class="animal-info">
          <h2>Thor</h2>

          <div class="tags">
            <span>2 anos</span>
            <span>Porte médio</span>
          </div>

          <p>
            Thor é brincalhão, carinhoso e gosta de passear.
            Procura uma família que tenha tempo para atividades.
          </p>

          <strong>Comportamento: ativo e amigável</strong>
        </div>
      </article>

      <article class="animal-card">
        <div class="animal-foto gato">
          🐱
        </div>

        <div class="animal-info">
          <h2>Lua</h2>

          <div class="tags">
            <span>1 ano</span>
            <span>Porte pequeno</span>
          </div>

          <p>
            Lua é tranquila, curiosa e gosta de locais confortáveis.
            Adapta-se bem a ambientes internos.
          </p>

          <strong>Comportamento: tranquila e carinhosa</strong>
        </div>
      </article>

    </div>

    <div class="rodape-pagina">
      <p>Gostou de algum animal? Conheça os cuidados necessários antes de tomar sua decisão.</p>

      <router-link to="/Cuidados">
        Ver cuidados
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.animais {
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 25px;
}

/* TÍTULO */

.titulo {
  text-align: center;
  margin-bottom: 35px;
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
  margin-top: 8px;

  color: #176b55;
  font-size: 30px;
}

.titulo p {
  margin-top: 8px;

  color: #74837e;
  font-size: 13px;
}

/* GRID */

.animais-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 700px;
  margin: 0 auto;
}

/* CARD */

.animal-card {
  overflow: hidden;

  background: white;
  border: 1px solid #e0ebe7;
  border-radius: 9px;

  box-shadow: 0 5px 18px rgba(23, 80, 65, 0.08);

  transition: 0.2s;
}

.animal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(23, 80, 65, 0.13);
}

/* FOTO */

.animal-foto {
  height: 210px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 115px;
}

.cachorro {
  background: linear-gradient(135deg, #c9a77b, #ead7b8);
}

.gato {
  background: linear-gradient(135deg, #e8e8e8, #c8d5d2);
}

/* INFORMAÇÕES */

.animal-info {
  padding: 18px;
}

.animal-info h2 {
  color: #245e4e;
  font-size: 20px;
}

.tags {
  display: flex;
  gap: 6px;
  margin: 8px 0 12px;
}

.tags span {
  padding: 4px 8px;

  border-radius: 15px;
  background: #e7f2ee;
  color: #3b7565;

  font-size: 10px;
}

.animal-info p {
  color: #697b75;
  font-size: 12px;
  line-height: 1.6;
  margin-bottom: 10px;
}

.animal-info strong {
  color: #4d685f;
  font-size: 11px;
}

/* FINAL */

.rodape-pagina {
  max-width: 700px;
  margin: 25px auto 0;
  padding: 20px;

  border-radius: 8px;
  background: #e6f2ee;

  text-align: center;
}

.rodape-pagina p {
  margin-bottom: 10px;

  color: #688078;
  font-size: 11px;
}

.rodape-pagina a {
  display: inline-block;

  padding: 8px 16px;
  border-radius: 5px;

  background: #176b55;
  color: white;

  font-size: 11px;
  font-weight: 600;
}

/* RESPONSIVO */

@media (max-width: 700px) {
  .animais {
    padding: 35px 18px;
  }

  .animais-grid {
    grid-template-columns: 1fr;
  }
}
</style>
