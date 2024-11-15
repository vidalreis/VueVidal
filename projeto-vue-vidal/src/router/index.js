import { createRouter, createWebHistory } from 'vue-router';
import Cadastro from '../views/Cadastro.vue';
import Listagem from '../views/Listagem.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/cadastro',
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro,
  },
  {
    path: '/listagem',
    name: 'listagem',
    component: Listagem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
