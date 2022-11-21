class Atletas{
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Categoria: " + "Infantil"
        } 
        else if (this.idade >= 12 && this.idade <= 13) {
            return "Categoria: " + "Juvenil"
        }
        else if (this.idade >= 14 && this.idade <= 15) {
            return "Categoria: " + "Intermediário"
        }
        else if (this.idade >= 16 && this.idade <= 30) {
            return "Categoria: " + "Adulto"
        }
        else {
            return "Categoria: " + "Sem categoria"
        }
    }
    calculaIMC() {
        let imc = this.peso / (this.altura ** 2)
        return "IMC: " + imc
    }
    calculaMediaValida() {
        let novasNotas = this.notas
        novasNotas.sort(function(a,b){
            if (a > b) return 1;
            if (a < b) return -1;

            return 0;
        })

        let novasNotas2 = novasNotas.slice(1,4)
            
        let soma = novasNotas2.reduce(function(acumulador, atual){
            return acumulador + atual 
        }, 0)
        return "Média válida: " + (soma / novasNotas2.length)

        
    }
    obtemNomeAtleta() {
        return "Nome: " + this.nome
    }
    obtemIdadeAtleta() {
        return "Idade: " + this.idade
    }
    obtemPesoAtleta() {
        return "Peso: " + this.peso
    }
    obtemNotasAtleta() {
        return "Notas: " + this.notas
    }
    obtemAltura() {
        return "Altura: " + this.altura
    }

    // Métodos de instância não executados.

    obtemCategoria() {
        return "Categoria: "
    }
    obtemIMC() {
        return "IMC: "
    }
    obtemMediaValida() {
        return "Média Válida: "
    }

}

let atleta = new Atletas("Vitor Vieira", 22, 65, 1.66, [8.89, 9.75, 10, 7.79, 9])
// console.log(atleta)

console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemAltura())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.calculaCategoria())
console.log(atleta.calculaIMC())
console.log(atleta.calculaMediaValida())

