<template>
  <div class="cadastro">
    <h1>Cadastro de Itens</h1>
    <form @submit.prevent="cadastrarItem">
      <div>
        <label for="nome">Nome do Item:</label>
        <input type="text" id="nome" v-model="nome" required />
      </div>
      <div>
        <label for="descricao">Descrição:</label>
        <input type="text" id="descricao" v-model="descricao" required />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      descricao: '',
    };
  },
  methods: {
    cadastrarItem() {
      const novoItem = {
        nome: this.nome,
        descricao: this.descricao,
      };
      // Salvar o item na listagem global (pode ser no Vuex ou em um localStorage)
      this.$router.push({ name: 'listagem' });
    },
  },
};
</script>

<style scoped>
/* Estilos para o formulário */
</style>
