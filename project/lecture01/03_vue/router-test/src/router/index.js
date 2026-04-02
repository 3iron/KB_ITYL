import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
// 컴포넌트가 있는 것만 import 가능, 없는 것을 지정하면 실행 에러

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 요청 주소 경로(path) 하나 당, 컴포넌트 하나 설정,
    // {path:'경로', component: 랜더링할 컴포넌트 이름}
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/members',
      name: 'members',
      component: Members,
    },
    {
      path: '/members/:id',
      component: MemberInfo,
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos,
      children: [{ path: ':id', name: 'videos/id', component: VideoPlayer }],
    },
  ],
});

export default router;
