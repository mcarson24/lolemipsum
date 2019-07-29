import Vue from 'vue';

// Components
import LolSpeakGenerator from './components/LolSpeakGenerator.vue';

Vue.component('lol-speaker', LolSpeakGenerator);

const app = new Vue({
	el: '#app'
});
