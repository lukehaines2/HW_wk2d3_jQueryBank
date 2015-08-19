$(document).ready(function(){
  console.log('ready');

// variable 1 = specify where it is
// variable 2 = pull it out .text
// variable 3 = change it to number by removing the dollar sign. (use parse)
function getCurrentTotal() {
var currentBalance = 0;
currentBalance += inputBoxValue
var newAccountBalance = parseInt('currentBalance')
 // to remove the dollar sign. make it 2 decimals
}
if (getFunds() === 0) {
$('#balance1').css("background-color","red");
}
//deposit click event
$('#deposit1').on('click', getFunds)

//find the value of the input box
function getFunds() {
  var inputAmount = $("#amount1").val();
  $("#balance1").text('$' + inputAmount);
  return Number(inputAmount);
}

// function depositFunds(){}

  
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