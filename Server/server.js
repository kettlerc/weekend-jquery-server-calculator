const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const equations = [ ];





app.post('/equations', (req, res) => {
    console.log('in /equations post:', req.body);
    equations.push(req.body);
    res.sendStatus(201);
});



app.listen(port, function(){
    console.log('listening on port:', port);
});