$(document).ready(function(){
  console.log('ready');

//The entire DEPOSIT side of CURRENT ACCOUNT
function depositFunds1(){
  var previousBalance = $('#balance1');
  var result = $(previousBalance).text();
  var currentBalance = parseInt(result.replace("$", ""));
  var newFunds = parseInt($('#amount1').val());

  previousBalance.text(function() {
    var total = currentBalance + newFunds;
    return "$" + total;
  });

$('#amount1').val('')
$('#balance1').css('background-color', 'grey')
}


//Deposit for SAVINGS ACCOUNT
function depositFunds2(){
  var previousBalance = $('#balance2');
  var result = $(previousBalance).text();
  var currentBalance = parseInt(result.replace("$", ""));
  var newFunds = parseInt($('#amount2').val());

  previousBalance.text(function() {
    var total = currentBalance + newFunds;
    return "$" + total;
  });

$('#amount2').val('')
$('#balance2').css('background-color', '#E3E3E3')
}

//on change fucntion for the check funds function so that it shows up as red
$('#balance1').on('change', checkFunds)
checkFunds();
//on page load check it. but then on a change event check again.
function checkFunds() {
if ( getFunds === 0) {
$('#balance1').css("background-color","red");
} else {
  $('#balance1').css("background-color","red");
}
}


function checkFunds2() {
if ( getFunds2 === 0) {
$('#balance2').css("background-color","red");
} else {
  $('#balance2').css("background-color","red");
}
}

//deposit click event
$('#deposit1').on('click', depositFunds1)
$('#deposit2').on('click', depositFunds2)
$('#withdraw2').on('click', withdrawFunds2)
$('#withdraw2').on('click', withdrawFunds2)


//find the value of the input box
function getFunds() {
  var inputAmount = $("#amount1").val();
  $("#balance1").text('$' + inputAmount);
  return Number(inputAmount);
}
//Need to refactor this one. 
function getFunds2() {
  var inputAmount2 = $("#amount2").val();
  $("#balance2").text('$' + inputAmount);
  return Number(inputAmount2);
}

function withdrawFunds1() {

var previousBalance = $('#balance1');
  var result = $(previousBalance).text();
  var currentBalance = parseInt(result.replace("$", ""));
  var newFunds = parseInt($('#amount1').val());

  previousBalance.text(function() {
    var total = currentBalance - newFunds;
    return "$" + total;
  });

$('#amount1').val('')
$('#balance1').css('background-color', 'grey')
}
  
});



// })
// function() {
// var currentInputBox = $('#balance1').html()
// var currentInputBoxHTML currentInputBox.replace('$', '')
// return 
// }
// var button = $('deposit1').on("click", "#filter", function() {
//     alert('clicked!');
// });

//withdraw to the max value of 0
//for 0
//if total > 0 return total. otherwise, 'return' so that it does nothing/goes back to where you were

//1. change box to red 


//2. change box back to green

// 3. Make sure numbers can't go into minus!
// - Make a function to stop negaives

//4. make current account take money from the savings account