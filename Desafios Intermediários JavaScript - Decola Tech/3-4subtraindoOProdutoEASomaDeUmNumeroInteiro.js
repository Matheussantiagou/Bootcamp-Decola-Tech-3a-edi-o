let lines = gets().split("      ");
let str = lines.toString()
const lista = []
let produto = 1
let soma = 0

function criaLista(){

  for(let i=0; i<str.length; i++){
    lista.push(parseInt(str[i]))
    }
    return lista
}
function findProd(lista){

for(let i=0; i<lista.length; i++){
  produto = lista[i] * produto
  }
  return produto
}
function findSum(){
for(let i=0; i<lista.length; i++){
  soma = lista[i] + soma
  }
  return soma
}

print(findProd(criaLista())-findSum())