console.log('JS');
$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    $('#equalsButton').on('click', computeMath);
    $('#clearButton').on('click', clearNums);
    $('#addButton').on('click', addNums);
    $('#subtractButton').on('click', subtractNums);
    $('#multiplyButton').on('click', multiplyNums);
    $('#divideButton').on('click', divideNums);
    getHistory();
};

let objectToSend = {};

function clearNums(){
    $('#firstNum').val(''),
    $('#secondNum').val('')
};

function computeMath(event){
    console.log('in computeMath');
    event.preventDefault();
    objectToSend['numOne'] = $('#firstNum').val();
    objectToSend['numTwo'] = $('#secondNum').val();
    $.ajax({
        type: 'POST',
        url: '/equations',
        data: objectToSend
    }).then(function (response){
        getHistory();
    }).catch(function (err){
        alert('Something went wrong, please try again later.')
        console.log(err);  
    });
};

function getHistory(){
    $.ajax({
        type: 'GET',
        url: '/equations'
    }).then(function (response){
        let eH = $('#equationHistory');
        eH.empty();
        console.log(response);
        for (let history of response){
            eH.append(`
            <li>
            ${history.numOne}
            ${history.operator}
            ${history.numTwo}
            =
            </li>`);
        }
    })
};

//functions for catching operator data
function addNums() {
    objectToSend['operator'] = '+';
};

function subtractNums() {
    objectToSend['operator'] = '-';
};

function multiplyNums() {
    objectToSend['operator'] = '*';
};

function divideNums() {
    objectToSend['operator'] = '/';
};