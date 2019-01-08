function digital_root(n) 
{
  var operationFinished = false;
  var digitalRoot = 0;
  var digits = n.toString().split('');
  
  //Checks for edge case where parameter is single digit
  if(digits.length == 1) 
  {
  console.log(n + ' is single digit, so no calculation is needed.');
  return n;
  }

  while(operationFinished == false) 
  {
      for(var i = 0; i < digits.length; i++)
      {   
         var digitToAdd = parseInt(digits[i]);         
         digitalRoot += digitToAdd;
      }

       //check if further calculation is required
       var digits = digitalRoot.toString().split('');
       if(digits.length == 1)
       {
        operationFinished = true;
       } 
       else 
       {
           digitalRoot = 0;
       }
  }
  return digitalRoot;
}