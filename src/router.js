import { createRouter, createWebHistory } from 'vue-router';
import LandingMain from './components/landing_page/LandingMain.vue';
//import SubjectList from './components/subjects/SubjectList';
import SubjectList from './components/subjects/SubjectList.vue';
import NotFound from './components/global_com/NotFound';
import ExamRule from './components/global_com/ExamRule.vue';
import EachQuestion from './components/exam/EachQuestion.vue';
import exam from './components/exam/exam.vue';
import resultMain from './components/results/resultMain.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/log' },
        { path: '/log', component: LandingMain },
        { path: '/subjects', component: SubjectList },
        {
            path: '/:exam', component: exam, children: [
                { path: ':each_question', component: EachQuestion, props: true},
                { path: 'exam_rule', component: ExamRule },
                { path: 'result', component: resultMain },
            ],
        },
        { path: '/:notFound(.*)', component: NotFound },

    ]
});
export default router;