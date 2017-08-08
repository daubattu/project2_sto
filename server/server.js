var express = require('express');
var bodyParser = require('body-parser');
import path from 'path';
import mongoose from 'mongoose';

let app = express();

let db = 'mongodb://admin:admin@ds011820.mlab.com:11820/blog';
mongoose.connect(db);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.static('public'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

import products from '../api/products.js';
import utils from '../api/utils.js';
import config from '../api/config.js';
import hire from '../api/hire.js';
import blog from '../api/blog.js';

app.use('/products', products);
app.use('/utils', utils);
app.use('/config', config);
app.use('/hire', hire);
app.use('/blog', blog);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('', './public/index.html'));
}) 

app.listen(3001, function () { 
    console.log("Listening to port 2000"); 
}); 
