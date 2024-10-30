<script setup>
import MovieList from './components/MovieList.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <h1>Bem-vindo ao Cadastro de Filmes</h1>
  </header>

  <main>
    <MovieList />
  </main>
</template>

<style scoped>
header {
  text-align: center;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

main {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
}
</style>
