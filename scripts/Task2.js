function checkSimpleNum (checkNum) {
      if (checkNum > 1000) {
        console.log("Данные не верны, введите ещё раз.")    
      } else {
        if (checkNum == 1 || checkNum == 0) {
          console.log(`Это число не может быть простым или сложным это число ${checkNum}`)
        } else {
          let j=0;
          for (let i = 2; i < checkNum; i++){           
            if (checkNum % i == 0) {
              j++
            } 
              }            
          if (j > 0)  {
            console.log(`Число ${checkNum} не относится к множеству простых чисел`)
          } else {
            console.log(`Число ${checkNum} простое число`)
          }                   
            }        
          }
      }

checkSimpleNum(prompt("Введите число чтобы его проверить"));