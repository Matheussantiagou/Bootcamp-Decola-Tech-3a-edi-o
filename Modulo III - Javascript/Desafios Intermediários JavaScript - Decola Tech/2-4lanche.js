let lines = gets().split("\n");
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);
 
var price = 0;

    if (X ==  1   ) {
      price  =    4     ;
    }
    else if (X ==  2  ) {
      price  =     4.5      ;
    }
    else if (X == 3    ) {
      price  =     5        ;
    }
    else if (X == 4   ) {
      price  =     2     ;
    }
    else if (X ==  5   ) {
      price  =    1.5          ;
    }
    let total = price * Y
    print( "Total: R$ "+total.toFixed(2));