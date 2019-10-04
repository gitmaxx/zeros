module.exports = function zeros(expression) {
  let currentNumber = 0;
  let currentNumberString = '';
  let currentSymbol='';
  let i=0;
  let result=0;
  let globalTwoCount=0;
  let globalFiveCount=0;
  while (i<expression.length) {
    currentSymbol = expression[i];
    while(currentSymbol!='!') {
      currentNumberString=currentNumberString+currentSymbol
      currentSymbol = expression[++i];
    }
    
    if (expression[i+1]=='*' || i==expression.length-1) {
      i=i+2;
      currentNumber=Number(currentNumberString);
      let temp=currentNumber;
      let tenCount=0;
      let fiftyCount=0;
      let twoCount=0;
      let fiveCount=0;
      while (currentNumber > 0) {
        currentNumber=Math.floor(currentNumber/5);
        fiveCount=fiveCount+currentNumber;
      }
      currentNumber=temp;
      currentNumberString='';
      result=result+fiveCount;
     
      while (currentNumber > 0) {
        currentNumber=Math.floor(currentNumber/10);
        tenCount=tenCount+currentNumber;
      }
      currentNumber=temp;
      while (currentNumber > 0) {
        currentNumber=Math.floor(currentNumber/50);
        fiftyCount=fiftyCount+currentNumber;
      }
      currentNumber=temp;
      while (currentNumber > 0) {
        currentNumber=Math.floor(currentNumber/2);
        twoCount=twoCount+currentNumber;
      }

      globalTwoCount=globalTwoCount+twoCount-tenCount-Math.ceil(fiftyCount/2);



    } else {
      i=i+3;
      currentNumber=Number(currentNumberString);
      if (currentNumber%2 == 0) {
        let temp=currentNumber;
        let tenCount=0;
        let fiftyCount=0;
        let twoCount=0;
        while (currentNumber > 0) {
          currentNumber=Math.floor(currentNumber/10);
          tenCount=tenCount+currentNumber;
        }
        currentNumber=temp;
        while (currentNumber > 0) {
          currentNumber=Math.floor(currentNumber/50);
          fiftyCount=fiftyCount+currentNumber;
        }
        currentNumber=temp;
        while (currentNumber > 0) {
          currentNumber=Math.floor(currentNumber/2);
          twoCount=twoCount+currentNumber;
        }
        
        result=result+tenCount+Math.ceil(fiftyCount/2);
        globalTwoCount=globalTwoCount+twoCount-tenCount-Math.ceil(fiftyCount/2);
      
        
      } else {
        let temp=currentNumber;
        let fiveCount=0;
        let tenCount=0;
        let fiftyCount=0;
        while (currentNumber > 0) {
          currentNumber=Math.floor(currentNumber/5);
          fiveCount=fiveCount+currentNumber;
        }
        currentNumber=temp;
        while (currentNumber > 0) {
          currentNumber=Math.floor(currentNumber/10);
          tenCount=tenCount+currentNumber;
        }
        currentNumber=temp;
        while (currentNumber > 0) {
          currentNumber=Math.floor(currentNumber/50);
          fiftyCount=fiftyCount+currentNumber;
        }
       
        globalFiveCount=globalFiveCount+fiveCount-tenCount-fiftyCount;
      }
      
      currentNumber=0;
      currentNumberString='';
      currentRes=0;
    }


  }
result=result+((globalFiveCount>globalTwoCount) ? globalTwoCount: globalFiveCount);
return result;
}
