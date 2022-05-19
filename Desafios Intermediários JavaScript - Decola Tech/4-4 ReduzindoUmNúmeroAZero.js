let lines = parseInt(gets());
 
let num =  lines
let passos = 0
while(num !== 0){
  
  if(num % 2 !==0){
    num = num -1
    
  }else{
    num = num /2
      }
  passos++
}
print(passos)