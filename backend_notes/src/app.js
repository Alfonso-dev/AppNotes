const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(require('./routers/notes.routers'));

module.exports = {app};