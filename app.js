const express = require('express');
const lol = require('lolspeak');
const txtgen = require('txtgen');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	let text = txtgen.paragraph(5);
	let loltext = lol(text);
	res.render('index', { loltext});
});

app.listen(3000, () => {
	console.log('Application is running at http://localhost:3000');
});
