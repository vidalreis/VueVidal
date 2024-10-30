<template>
  <div class="movie-list">
    <h2>Cadastro de Filmes</h2>
    <div>
      <label for="title">Título:</label>
      <input type="text" v-model="newMovie.title" placeholder="Digite o título" />
    </div>
    <div>
      <label for="director">Diretor:</label>
      <input type="text" v-model="newMovie.director" placeholder="Digite o diretor" />
    </div>
    <div>
      <label for="year">Ano de Lançamento:</label>
      <input type="number" v-model="newMovie.year" placeholder="Digite o ano" />
    </div>
    <button @click="addMovie">Cadastrar Filme</button>

    <div v-if="movies.length === 0">
      <p>Nenhum filme cadastrado.</p>
    </div>
    <ul v-else>
      <li v-for="(movie, index) in movies" :key="index">
        {{ movie.title }} - {{ movie.director }} - {{ movie.year }}
        <button @click="deleteMovie(index)">Deletar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMovie: {
        title: "",
        director: "",
        year: ""
      },
      movies: []
    };
  },
  methods: {
    addMovie() {
      if (this.newMovie.title && this.newMovie.director && this.newMovie.year) {
        this.movies.push({ ...this.newMovie });
        this.newMovie.title = "";
        this.newMovie.director = "";
        this.newMovie.year = "";
      } else {
        alert("Preencha todos os campos.");
      }
    },
    deleteMovie(index) {
      this.movies.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.movie-list {
  max-width: 500px;
  margin: auto;
  text-align: left;
}
input {
  display: block;
  margin-bottom: 10px;
}
button {
  margin-top: 10px;
}
</style>
