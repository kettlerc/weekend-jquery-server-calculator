console.log('JS');
$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    $('#equalsButton').on('click', computeMath);
    $('#clearButton').on('click', clearNums);
    $('#addButton').on('click', addNums);

    // getHistory();
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
        // getHistory();
    }).catch(function (err){
        alert('Something went wrong, please try again later.')
        console.log(err);  
    });
};

function addNums() {
    objectToSend['operator'] = '+';
}