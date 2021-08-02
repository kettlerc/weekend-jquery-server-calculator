//code to initialize express & body-parser
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//empty objects that data is pushed into before
//being sent back to client
const equations = [];
const answer = [];

//POST receives initial data from client
app.post('/equations', (req, res) => {
    console.log('in /equations post:', req.body);
    equations.push(req.body);
    res.sendStatus(201);
});

//runs doTheMath function on data and returns it to client
app.get('/equations', (req, res) => {
    // console.log('in equations get', equations);
    doTheMath();
    res.send(answer);
});

//returns data to keepHistory function
app.get('/history', (req, res) => {
    console.log('answer is', answer);
    res.send(answer);
});

//tells server to listen for requests
app.listen(port, function(){
    console.log('listening on port:', port);
});

//function for computing math equations
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
}; //end doTheMath