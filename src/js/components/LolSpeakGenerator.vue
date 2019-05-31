<template>
	<div v-cloak class="p-6">
		<div class="flex flex-col w-3/4 mx-auto my-6 items-center">
			<div class="flex mb-4">
				<div class="flex flex-col w-1/2 mx-4">
					<label for="paragraphs">Number of paragraphs</label>
					<input type="number" v-model="paragraphs" id="paragraphs" value="paragraphs">
				</div>
				<div class="flex flex-col w-1/2 mx-4">
					<label for="sentences">Number of sentences</label>
					<input type="number" v-model="sentences" id="sentences" value="sentences">
				</div>
			</div>
			<button @click="getLolSpeak" class="border-solid border-2 border-gray-600 py-6 px-8 rounded hover:bg-gray-600 hover:text-white">Generate</button>
		</div>
		<section v-text="lolSpeak" class="leading-relaxed"></section>
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
