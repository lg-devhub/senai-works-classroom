<script setup></script>

<template>
  <main class="layout">
    <header class="navbar">
      <div class="logo-area">
        <span class="logo-icon">🐾</span>

        <div>
          <h1>Patas do Vale</h1>
          <span>Portal de adoção de animais</span>
        </div>
      </div>

      <nav class="menu">
        <router-link to="/">Início</router-link>
        <router-link to="/Animais">Animais</router-link>
        <router-link to="/Cuidados">Cuidados</router-link>
      </nav>
    </header>

    <section class="conteudo">
      <RouterView />
    </section>

    <footer class="rodape">
      <p>
        Projeto desenvolvido por Luiz Gustavo de Oliveira e Eric Fabiano Pelegrini
      </p>
    </footer>
  </main>
</template>

<style scoped>

/* ========================================
   GOOGLE FONTS
======================================== */

@import url('https://fonts.googleapis.com/css2?family=Marck+Script&family=Zen+Loop:ital@0;1&display=swap');


/* ========================================
   RESET
======================================== */

:global(*) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:global(body) {
  font-family: "Zen Loop", sans-serif;

  background: #edf5f2;
  color: #24443b;
}

:global(a) {
  text-decoration: none;
}


/* ========================================
   LAYOUT
======================================== */

.layout {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
}


/* ========================================
   NAVBAR
======================================== */

.navbar {
  min-height: 95px;

  padding: 0 8%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #176b55;
  color: white;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}


/* ========================================
   LOGO
======================================== */

.logo-area {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-icon {
  font-size: 44px;
}

.logo-area h1 {
  font-family: "Marck Script", cursive;

  font-size: 48px;
  line-height: 0.9;
  font-weight: 400;

  white-space: nowrap;
}

.logo-area span:last-child {
  display: block;

  margin-top: 8px;

  font-family: "Zen Loop", sans-serif;

  font-size: 22px;
  line-height: 1;

  color: #c8e6dc;

  white-space: nowrap;
}


/* ========================================
   MENU
======================================== */

.menu {
  display: flex;
  align-items: center;
  gap: 14px;
}

.menu a {
  padding: 13px 21px;

  border-radius: 8px;

  color: #e5f5ef;

  font-family: "Zen Loop", sans-serif;

  font-size: 24px;
  line-height: 1;

  font-weight: 400;

  transition: 0.2s ease;
}

.menu a:hover {
  background: rgba(255, 255, 255, 0.12);
  color: white;
}

.menu a.router-link-active {
  background: white;
  color: #176b55;
}


/* ========================================
   CONTEÚDO
======================================== */

.conteudo {
  flex: 1;

  width: 100%;
}


/* ========================================
   RODAPÉ
======================================== */

.rodape {
  padding: 26px 20px;

  text-align: center;

  background: #123f35;
  color: #b9d5cc;

  font-family: "Zen Loop", sans-serif;

  font-size: 21px;
  line-height: 1.2;
}


/* ========================================
   RESPONSIVO
======================================== */

@media (max-width: 700px) {

  .navbar {
    min-height: auto;

    padding: 20px 5%;

    flex-direction: column;
    gap: 18px;
  }

  .logo-area {
    gap: 10px;
  }

  .logo-icon {
    font-size: 36px;
  }

  .logo-area h1 {
    font-size: 40px;
  }

  .logo-area span:last-child {
    font-size: 19px;
  }

  .menu {
    width: 100%;

    justify-content: center;

    gap: 5px;
  }

  .menu a {
    font-size: 21px;

    padding: 11px 15px;
  }

  .rodape {
    font-size: 18px;
  }
}

</style>