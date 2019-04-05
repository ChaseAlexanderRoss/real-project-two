const express = require('express');
const app = express();
const parser = require('body-parser');
const methodOverride = require('method-override');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'hbs');
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(require('./routes/index.js'));

app.listen(app.get('port'), () => {
	console.log(`App listening on port ${app.get('port')}`);
});
