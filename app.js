const express 		= require('express');
const lol     		= require('lolspeak');
const txtgen  		= require('txtgen');
const bodyParser	= require('body-parser');
const app     		= express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	let text = txtgen.paragraph(5);
	let loltext = lol(text);
	res.render('index', { loltext});
});

app.post('/', (req, res) => {
	let { paragraphs, sentences } = req.body;
	
	let text = '';

	for (let i = 0; i < paragraphs; i++) {
		text += txtgen.paragraph(req.body.sentences);
	}

	res.render('index', { 
		loltext: lol(text),
		paragraphs,
		sentences
	 });
});

app.listen(3000, () => {
	console.log('Application is running at http://localhost:3000');
});
