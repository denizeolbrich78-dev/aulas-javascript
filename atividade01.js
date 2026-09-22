const prompt = require('prompt-sync')();

let Itens = []//array com todos os itens(catalogo)

// deveria ser o começo da etapa 3(cadastro 5 itens)
for (let i = 0; i < 5; i++){
    let nomeItem = prompt(`Insira o nome do ${i+1}º item: `)
    let precoItem = parseFloat(prompt(`Insira o preço do ${i+1}º item: `));
    while (isNaN(precoItem)||precoItem<=0){
        precoItem = parseFloat(prompt(`Invalido. Insira o preço do ${i+1}º item: `));
    }
    let raridadeItem = "Raro";
    let quantidadeEstoque = 12;
    // deveria ser o começo da etapa 2(regras de negocio)
    if (precoItem < 100){
        raridadeItem = "Comum"
    } else if (precoItem >= 100 && precoItem<500){
        raridadeItem = "Raro"
    }  else if (precoItem >= 500){
        raridadeItem = "Lendário"
    }
    // deveria ser o fim da etapa 2
    // deveria ser o começo da etapa 1(ficha do item)
    let item = {
        Nome: nomeItem,
        Preco: precoItem,
        Raridade: raridadeItem,
        Estoque: quantidadeEstoque,
        EmDestaque: (precoItem > 500),
        EmPromocao: ((i+1)%2==0)}
    Itens.push(item)
    // deveria ser o fim da etapa 1
    console.log(`--- Item ${i+1} Cadastrado com sucesso! ---`)
}
// deveria ser o começo da etapa 3
// deveria ser o começo da etapa 4(simulação de venda)
console.table(Itens)
let opcao = parseFloat(prompt(`Escolha um item para simular a venda de 0 a ${Itens.length-1}: `))
while(opcao < 0 || opcao > Itens.length){
    opcao = parseFloat(prompt(`Invalido. Escolha um item para simular a venda de 0 a ${Itens.length-1}: `))
}
console.log("--- Simulação de venda ---")
opcao = Itens[opcao]
console.log(opcao)
while(opcao.Estoque>0){
    console.log(`Estoque do item ${opcao.Nome}: ${opcao.Estoque}`)
    opcao.Estoque -= 1
    
}
console.log(`Estoque do item ${opcao.Nome}: ${opcao.Estoque}`)
// deveria ser o fim da etapa 4
// deveria ser o começo da etapa 5(catalogo de itens)
console.log("--- Catalogo ---")
console.table(Itens)
// deveria ser o fim da etapa 5