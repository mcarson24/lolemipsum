const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	let loltext = 'hello there!';
	res.render('index', { loltext});
});

app.listen(3000, () => {
	console.log('Application is running at http://localhost:3000');
});
