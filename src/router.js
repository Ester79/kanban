import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: 'index' */ './pages/LandingPage.vue'),
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import(/* webpackChunkName: 'todos' */ './pages/ToDoPage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */ './components/LogInComponent.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import(/* webpackChunkName: 'signin' */ './components/SignInComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  },
});

export default router;
