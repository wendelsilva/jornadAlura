console.log(`\n Trablhando com condicionais`);

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba'
)

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino  = "Salvador";

listaDeDestinos.push('Fortaleza') // adicionando um item na lista
console.log('\n Destinos possíveis');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;

// while(contador < 3) {
//     if(listaDeDestinos[contador] == destino) {
//         destinoExiste = true;
//         break;
//     }
//     contador++;
// }


console.log('destino existe', destinoExiste);

if(podeComprar && destinoExiste) {
    console.log('boa viagem')
} else {
    console.log('desculpe tivemos um erro')
}

for(let cont = 0 ; cont < 3 ; cont++) {
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }    
}