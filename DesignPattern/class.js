class Atleta {
    constructor(nome, idade, time){
        this.nome = nome
        this.idade = idade
        this.time = time
    }    
    getData(){
        return ("Nome: " + this.nome + "\n" + "Idade: " + this.idade + "\n" + "Time: " + this.time)
    }
}

const Jogador = new Atleta('Cristiano Ronaldo', 33, 'Real Madrid')
console.log(Jogador.getData())