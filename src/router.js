import { createRouter, createWebHistory } from 'vue-router';
import LandingMain from './components/landing_page/LandingMain.vue';
//import SubjectList from './components/subjects/SubjectList';
import SubjectList from './components/subjects/SubjectList.vue';
import NotFound from './components/global_com/NotFound';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/log' },
        { path: '/log', component: LandingMain },
        { path: '/subjects', component: SubjectList },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});
export default router;