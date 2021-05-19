import { createApp } from 'vue';
import App from './App.vue';
//import LandingHeader from "./components/landing-page/LandingHeader.vue";
import TheHeader from './components/global_com/TheHeader.vue';
import AsideBasecard from './components/global_com/AsideBasecard';
import EachSubject from './components/global_com/EachSubject';

import router from './router.js';

const app = createApp(App);

app.component('the-header', TheHeader);
app.component('aside-basecard', AsideBasecard);
app.component('each-subject', EachSubject);

//app.component('landing-header', LandingHeader);
app.use(router);

app.mount('#app');



