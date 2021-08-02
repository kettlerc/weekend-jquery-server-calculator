console.log('JS');
//initializes JQuery
$(document).ready(onReady);

//function that runs immediately on page load
function onReady() {
    console.log('JQ');
    //jquery to handle button clicks
    $('#equalsButton').on('click', computeMath);
    $('#clearButton').on('click', clearNums);
    //NOTE FROM LIVE SOLVE: could have used 'this' to simplify
    $('#addButton').on('click', addNums);
    $('#subtractButton').on('click', subtractNums);
    $('#multiplyButton').on('click', multiplyNums);
    $('#divideButton').on('click', divideNums);

    keepHistory();
};

//empty object to hold data
//NOTE FROM LIVE SOLVE: could have used an empty string and defined
//variables instead of adding values directly to object
let objectToSend = {};

//function to clear input fields
function clearNums(){
    $('#firstNum').val(''),
    $('#secondNum').val('')
}; //end clearNums

//function for posting data to server and getting result back
function computeMath(event){
    console.log('in computeMath');
    //prevents page from refreshing on submit
    event.preventDefault();
    //pushes input field data to empty object
    objectToSend['numOne'] = $('#firstNum').val();
    objectToSend['numTwo'] = $('#secondNum').val();
    //AJAX to POST object to server
    $.ajax({
        type: 'POST',
        url: '/equations',
        data: objectToSend
    }).then(function (response){
        keepHistory();
    });
    //AJAX to get result of equation back from server
    //then append that data to the DOM
    $.ajax({
        type: 'GET',
        url: '/equations'
    }).then(function (response){
        let result = $('#result');
        result.empty();
        result.append(`${response[response.length-1]}`);
    });
}; //end computeMath

//function for getting equation history from server
function keepHistory(){
    //AJAX to GET history from server
    //then loop through the data and append to DOM
    $.ajax({
        type: 'GET',
        url: '/history'
    }).then(function (response){
        console.log(response);
        let history = $('#equationHistory');
        history.empty();
        for (let i=0; i<response.length; i+=2){
            let equation = response[i];
            history.append(`<li>${equation}</li>`);
        }
    });
}; //end keepHistory

//functions for catching operator data with buttons
//NOTE FROM LIVE SOLVE: could have use 'this' to simplify
function addNums() {
    objectToSend['operator'] = '+';
}; //end addNums
function subtractNums() {
    objectToSend['operator'] = '-';
}; //end subtract nums
function multiplyNums() {
    objectToSend['operator'] = '*';
}; //end multiplyNums
function divideNums() {
    objectToSend['operator'] = '/';
}; //end divideNums