const express 		= require('express');
const lol     		= require('lolspeak');
const txtgen  		= require('txtgen');
const bodyParser	= require('body-parser');
const app     		= express();
const PORT 			= process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	let text = txtgen.paragraph(5);
	let loltext = lol(text);
	res.render('index', { 
		loltext,
		paragraphs: 2,
		sentences: 4
	});
});

app.post('/', (req, res) => {
	let { paragraphs, sentences } = req.body;
	
	let text = '';

	for (let i = 0; i < paragraphs; i++) {
		text += txtgen.paragraph(req.body.sentences);
	}
	console.log(lol('Oh hello please to make the lolem ipsum here!'));
	res.json({ 
		loltext: lol(text),
		paragraphs,
		sentences
	 });
});

app.listen(PORT, () => {
	console.log('Application is running at http://localhost:3000');
});
