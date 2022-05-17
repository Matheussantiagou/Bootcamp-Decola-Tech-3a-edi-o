function validaArr(arr, num){
  try{
    if(!arr && !num) throw new ReferenceError("Envie os parametros");
    if(typeof arr !== Object) throw new TypeError("O array precisa ser tipo object");
    if(typeof num !== number) throw new TypeError("Num precisa ser tipo numero");
    if(arr.length !== num) throw new RangeError("Tamanho invalido");

    return arr
  }catch(e){
    if(e instanceof ReferenceError){
      console.log("Este erro é um referenceError!")
      console.log(e.message)
      console.log(e.stack)
    }else if(e instanceof TypeError){
      
      console.log("Este erro é um TypeError!")
      console.log(e.message)
      console.log(e.stack)
    }else if(e instanceof RangeError){
      
      console.log("Este erro é um RangeError!")
      console.log(e.message)
      console.log(e.stack)
    }else{
        console.log("Erro n esperado:" + e)
    }
  
  }
}  

console.log(validaArr())