import { createApp } from 'vue';
import App from './App.vue';

//font Awesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//import LandingHeader from "./components/landing-page/LandingHeader.vue";
import TheHeader from './components/global_com/TheHeader.vue';
import AsideBasecard from './components/global_com/AsideBasecard';
import EachSubject from './components/global_com/EachSubject';
import ExamRule from './components/global_com/ExamRule.vue';

import router from './router.js';
import vuex  from './vuex.js';
library.add(fas);// fontesome

const app = createApp(App);

app.component('the-header', TheHeader);
app.component('aside-basecard', AsideBasecard);
app.component('each-subject', EachSubject);
app.component('exam-rule', ExamRule);

//app.component('landing-header', LandingHeader);
app.use(router);
app.use(vuex);

app.component('font-awesome-icon', FontAwesomeIcon); //fontawsome

app.mount('#app');



