let x = parseInt(gets());
while (x !== 0)
{
    if  (x % 2     !==   0  )
    {   
        const lista = []
        x = x+1;
        let i = 1
        let result = 0
        while(i<=5){
          if(x % 2 == 0){
            lista.push(x)
            i++
            
          } 
          x= x+1
          
        }
        for(let i=0; i<lista.length; i++){
          result = result + lista[i]
        }
        print(result);
        
    }else{
        const lista = []
        
        let i = 1
        let result = 0
        while(i<=5){
          if(x % 2 == 0){
            lista.push(x)
            i++
            
          } 
          x= x+1
          
        }
        for(let i=0; i<lista.length; i++){
          result = result + lista[i]
        }
        print(result);
    }
    
    
    
    x = parseInt(gets());
}