var number = [1,-2,0,2,-4,9];
function PositiveNumbers(number) {
    let positiveNo = [];
  
    for (let i = 0; i < number.length; i++) {
      if (number[i] > 0) {
        positiveNo.push(number[i]);
      }
    }
  
    return positiveNo;
  }
  
  let positiveNo = PositiveNumbers(number);
  
  console.log(positiveNo);




  
 