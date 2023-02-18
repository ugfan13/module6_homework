function getNum(a, b) {  
  let num = a; 
    const i = setInterval(function() {
      console.log(num)
      if (num == b) {
      clearInterval(i)};
      num++;
   }, 1000)
       
} 
getNum(2, 8);