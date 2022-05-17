function calculaIdade(anos) {
	
    return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 24
}

const pessoa2 = {
    nome: 'Adam',
    idade: 2
}

const pessoa3 = {
    nome: 'Giannis',
    idade: 27
}
const pessoa4 = {
    nome: 'Matt',
    idade: 33
}

console.log(calculaIdade.apply(pessoa3, [5]))