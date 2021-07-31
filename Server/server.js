const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const equations = [ ];









app.listen(port, function(){
    console.log('listening on port:', port);
})