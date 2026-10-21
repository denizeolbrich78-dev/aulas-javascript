// ATIVIDADE 01
console.log(`----------ATIVIDADE 01----------`)
const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Beto', ativo: false },
    { nome: 'Caio', ativo: true },
    { nome: 'Duda', ativo: false }
];

const usuariosAtivos = usuarios.filter ( usuario => usuario.ativo == true );

console.log(usuariosAtivos)

// ATIVIDADE 02
console.log(`----------ATIVIDADE 02----------`)
const produtos = [ { nome: 'Teclado', preco: 100 }, { nome: 'Mouse', preco: 50 } ];
const produtosDescontados = produtos.map(produto => ({
    ...produto,
    preco: produto.preco*.9
}))
console.log(produtosDescontados)

// ATIVIDADE 03

console.log(`----------ATIVIDADE 03----------`)


const carrinho = [25.50, 10.00, 100.00, 5.00];
const total = carrinho.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(total)

// ATIVIDADE 04

console.log(`----------ATIVIDADE 04----------`)

const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];
const limparLista = (array) => [ ... new Set (array)];

const nomesUnicos = limparLista(nomesRepetidos);

console.log(nomesUnicos);

// ATIVIDADE 05

console.log(`----------ATIVIDADE 05----------`)

const apiProdutos = [ 
    { id: 101, nome: 'Monitor led', preco: 899.9 }, 
    { id: 102, nome: 'Teclado mecanico', preco: 250.0 }, 
    { id: 103, nome: 'Mouse gamer', preco: 125.45 } 
    ];

    
    const produtosFormatados = apiProdutos.map(produto => {
        const nomeCapitalizado = produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1);
        const precoFormatado = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
    
        return {
            ...produto,
            nome: nomeCapitalizado,
            precoFormatado: precoFormatado
        };
    });

    console.log(produtosFormatados)



