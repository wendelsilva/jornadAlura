console.log(`Trablhando com Listas`);
// const salvador = `Salvador`;
// const saopaulo = `São Paulo`;
// const riodejaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba'
)

listaDeDestinos.push('Fortaleza') // adicionando um item na lista
console.log('Destinos possíveis');
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // retira um item da lista
console.log('Destinos possíveis');
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); // pega o elemento na posição 1
