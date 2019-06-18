<template>
	<div v-cloak class="px-6 py-3">
		<div class="flex flex-col w-3/4 mx-auto my-6 items-center">
			<div class="flex mb-4">
				<div class="flex flex-col w-1/2 mx-4">
					<label for="paragraphs" class="mb-2">Number of paragraphs</label>
					<input type="number" v-model="paragraphs" id="paragraphs" value="paragraphs" class="p-2 bg-gray-200 text-lg rounded">
				</div>
				<div class="flex flex-col w-1/2 mx-4">
					<label for="sentences" class="mb-2">Number of sentences</label>
					<input type="number" v-model="sentences" id="sentences" value="sentences" class="p-2 bg-gray-200 text-lg rounded">
				</div>
			</div>
			<button @click="getLolSpeak" class="border-solid border-2 border-indigo-700 py-6 px-8 rounded hover:bg-indigo-700 text-indigo-700 hover:text-white">MAEK LOLEM</button>
		</div>
		<section class="leading-relaxed">
			<p v-for="paragraph in lolSpeak" v-text="paragraph" class="my-3"></p>
		</section>
	</div>
</template>

<script>
	const lol = require('lolspeak');
	const txtgen = require('txtgen');
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

			console.log(lol('Kitties are web developers too! They may need some placeholder text to do thier desinging.'));
		},
		methods: {
			getLolSpeak() {
				let text = [];

				for (let i = 0; i < this.paragraphs; i++) {
					text.push(
						lol(txtgen.paragraph(this.sentences))
					);
				}
				this.lolSpeak = text;
			}
		}
	}
</script>
