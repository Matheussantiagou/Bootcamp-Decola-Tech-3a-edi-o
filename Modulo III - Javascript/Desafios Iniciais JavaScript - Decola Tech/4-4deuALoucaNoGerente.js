let input = gets();
let desconto = parseInt(input);

input = gets();

let precoAntigo = parseInt( input         );

let precoNovo =      precoAntigo - (input * (desconto/100))

print(precoNovo)