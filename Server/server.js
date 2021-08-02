const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const equations = [];
const answer = [];

app.post('/equations', (req, res) => {
    console.log('in /equations post:', req.body);
    equations.push(req.body);
    res.sendStatus(201);
});

app.get('/equations', (req, res) => {
    // console.log('in equations get', equations);
    doTheMath();
    res.send(answer);
});

app.get('/history', (req, res) => {
    console.log('answer is', answer);
    res.send(answer);
});

app.listen(port, function(){
    console.log('listening on port:', port);
});

function doTheMath(){
    let numOne = Number(equations[equations.length-1].numOne);
    let numTwo = Number(equations[equations.length-1].numTwo);
    let operator = equations[equations.length-1].operator;

    if (equations[equations.length-1].operator === '+'){
        let total = numOne + numTwo;
        answer.push(`${numOne} ${operator} ${numTwo} = ${total}`);
        answer.push(`${total}`);
    } else if (equations[equations.length-1].operator === '-'){
        let total = numOne - numTwo;
        answer.push(`${numOne} - ${numTwo} = ${total}`);
        answer.push(`${total}`);
    } else if (equations[equations.length-1].operator === '*'){
        let total = numOne * numTwo;
        answer.push(`${numOne} * ${numTwo} = ${total}`);
        answer.push(`${total}`);
    } else if (equations[equations.length-1].operator === '/'){
        let total = numOne / numTwo;
        answer.push(`${numOne} / ${numTwo} = ${total}`);
        answer.push(`${total}`);
    } else {
        alert('Please choose an operator!');
    }
    return answer;
};