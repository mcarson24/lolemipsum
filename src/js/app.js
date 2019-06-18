import Vue from 'vue';

// Components
import LolSpeakGenerator from './components/LolSpeakGenerator.vue';

Vue.component('lol-speaker', LolSpeakGenerator);

const app = new Vue({
	el: '#app'
});

let lol = require('../../js/lolspeak');

console.log(lol('We must have the javascripts to make the lolem. Turn on the JavaScripts!!'));
