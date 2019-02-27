const express = require('express')
const app = express()
const parser = require('body-parser')
const methodOverride = require('method-override')

app.set('view engine', 'hbs')

app.use(require('./routes/index.js'))

app.listen(3000, () => console.log('listenting on port 3k'))