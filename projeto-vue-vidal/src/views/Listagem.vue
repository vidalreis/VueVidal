<template>
  <div class="listagem">
    <h1>Listagem de Itens</h1>
    <ul>
      <li v-for="(item, index) in itens" :key="index">
        {{ item.nome }} - {{ item.descricao }}
        <button @click="deletarItem(index)">Deletar</button>
      </li>
    </ul>
    <router-link to="/cadastro">Cadastrar Novo Item</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itens: JSON.parse(localStorage.getItem('itens') || '[]'),
    };
  },
  methods: {
    deletarItem(index) {
      this.itens.splice(index, 1);
      localStorage.setItem('itens', JSON.stringify(this.itens));
    },
  },
};
</script>

<style scoped>
/* Estilos para a listagem */
</style>
