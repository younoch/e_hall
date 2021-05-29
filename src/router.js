import { createRouter, createWebHistory } from 'vue-router';
import LandingMain from './components/landing_page/LandingMain.vue';
//import SubjectList from './components/subjects/SubjectList';
import SubjectList from './components/subjects/SubjectList.vue';
import NotFound from './components/global_com/NotFound';
import ExamRule from './components/global_com/ExamRule.vue';
import EachQuestion from './components/subjects/EachQuestion.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/log' },
        { path: '/log', component: LandingMain },
        {
            path: '/subjects', component: SubjectList, children: [
                { path: '/exam_rule', component: ExamRule },
                { path: '/each-question', component: EachQuestion },
            ]
        },


        { path: '/:notFound(.*)', component: NotFound },

    ]
});
export default router;