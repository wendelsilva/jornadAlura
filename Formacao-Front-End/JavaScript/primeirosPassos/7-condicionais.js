console.log(`Trablhando com condicionais`);

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba'
)

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;


listaDeDestinos.push('Fortaleza') // adicionando um item na lista
console.log('Destinos possíveis');
console.log(listaDeDestinos);


// if(idadeComprador >= 18) {
//     console.log('Comprador maior de idade')
//     listaDeDestinos.splice(1,1); // retira um item da lista
//     console.log('Destinos possíveis');
// } else if(estaAcompanhada) {
//         console.log('está acompanhada');
//         listaDeDestinos.splice(1,1); // retira um item da lista
// } else {
//     console.log('Não é maior de idade e não posso vender');
// }

if(idadeComprador >= 18 || estaAcompanhada) {
    console.log('Boa viagem')
    listaDeDestinos.splice(1,1); // retira um item da lista
} else {
    console.log('Não é maior de idade e não posso vender');
}

console.log('Embarque: \n\n')
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log('boa viagem')
} else {
    console.log('você não pode embarcar')
}

console.log(listaDeDestinos);
