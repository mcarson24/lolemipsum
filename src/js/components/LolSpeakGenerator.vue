<template>
	<div v-cloak>
		<section v-text="lolSpeak"></section>
		<label for="paragraphs">Number of paragraphs</label>
		<input type="number" v-model="paragraphs" id="paragraphs" value="paragraphs">
		<label for="sentences">Number of sentences</label>
		<input type="number" v-model="sentences" id="sentences" value="sentences">
		<button @click="getLolSpeak">Generate</button>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				paragraphs: '3',
				sentences: '4',
				lolSpeak: ''
			}
		},
		created() {
			this.getLolSpeak();
		},
		methods: {
			getLolSpeak() {
				axios.post('/', {
					paragraphs: this.paragraphs,
					sentences: this.sentences
				}).then(({ data }) => {
					this.lolSpeak = data.loltext;
				}).catch(error => {
				});
			}
		}
	}
</script>
