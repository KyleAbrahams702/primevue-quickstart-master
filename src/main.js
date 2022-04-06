import { createApp } from 'vue'
import App from './App.vue';

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Editor from 'primevue/editor';
import FileUpload from 'primevue/fileupload';
import Dialog from 'primevue/dialog';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Editor',Editor)
app.component('FileUpload',FileUpload)
app.component('Dialog',Dialog)

app.mount('#app')
