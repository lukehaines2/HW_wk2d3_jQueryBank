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

//on change fucntion for the check funds function so that it shows up as red
$('#balance1').on('change', checkFunds)
checkFunds();
//on page load check it. but then on a change event check again.
function checkFunds() {
if ('amount1' === 0) {
$('#balance1').css("background-color","red");
} else {
  $('#balance1').css("background-color","grey");
}}
//deposit click event
$('#deposit1').on('click', depositFunds1)

// //find the value of the input box
// function getFunds() {
//   var inputAmount = $("#amount1").val();
//   $("#balance1").text('$' + inputAmount);
//   return Number(inputAmount);
// }



  
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