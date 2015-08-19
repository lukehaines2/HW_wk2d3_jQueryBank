function addFundsE(){
    var previousBalance = $('#balance1');
   var result = $(previousBalance).text();
   console.log(result)

   var currentBalance = parseInt(result.replace("$", ""));
   console.log(currentBalance)
  
    var newFunds = parseInt($('#amount1').val());
    console.log(newFunds)

    previousBalance.text(function(){
        var total = currentBalance + newFunds;
        return "$" + total;
    });

$('#amount1').val("")
$('#balance1').css('background-color', 'grey')
}