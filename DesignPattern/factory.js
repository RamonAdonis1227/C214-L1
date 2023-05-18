const Atleta = (nome, idade, time) => ({
    nome,
    idade,
    time,
    getData: () => ({nome, idade, time})
})

const Jogador = Atleta('Cristiano Ronaldo',33, 'Real Madrid')
console.log(Jogador.getData())