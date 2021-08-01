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
    keepHistory();
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
        keepHistory();
    });
    $.ajax({
        type: 'GET',
        url: '/equations'
    }).then(function (response){
        let result = $('#result');
        result.empty();
        result.append(`${response[response.length-1]}`);
    });
};

function keepHistory(){
    $.ajax({
        type: 'GET',
        url: '/history'
    }).then(function (response){
        console.log(response);
        let history = $('#equationHistory');
        history.empty();
        for (let i=0; i<response.length; i++){
            history.append(`<li>${response[response.length-2]}</li>`);
        }
    })
};

//functions for catching operator data with buttons
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