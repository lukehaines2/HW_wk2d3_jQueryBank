$(document).ready(function(){
  console.log('ready');


//Get it to deposit money
//-event listener to execute the copy of deposit value to the 'Display text'.
//-clicking button executes the function in the event listener.

// variable 1 = specify where it is
// variable 2 = pull it out .text
// variable 3 = change it to number by removing the dollar sign. (use parse)
$('#deposit1').on('click', getFunds)

//find the value of the input box
function getFunds() {
  var getvalue = $("#amount1").val();
  console.log(getvalue);
}
  
})
// debugger;
// setValue = $('#balance2').val('bla');

// console.log(getFunds);
// }

// balance1 = 

// balance2 =  '#balance2' because its an ID

// var button = $('deposit1').on("click", "#filter", function() {
//     alert('clicked!');
// });


//for 0
//if total > 0 return total. otherwise, 'return' so that it does nothing/goes back to where you were



//Get it to withdraw money



//withdraw to the max value of 0





//1. change box to red 


// var balanceBackground = $('balance').css("background-color","red");
// console.log(balanceBackground);



//2. change box back to green

// 3. Make sure numbers can't go into minus!
// - Make a function to stop negaives





//4. make current account take money from the savings account