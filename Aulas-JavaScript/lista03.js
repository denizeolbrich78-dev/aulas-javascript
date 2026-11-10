const elementosFake = [
    { id: 1, tagName: 'DIV', style: { color: 'blue', display: 'flex' }, classList: ['container', 'active'] },
    { id: 2, tagName: 'H1', style: { color: 'red', display: 'block' }, classList: ['title'] },
    { id: 3, tagName: 'BUTTON', style: { color: 'white', display: 'inline-block' }, classList: ['btn', 'btn-primary'] },
    { id: 4, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'pending'] },
    { id: 5, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'done'] },
    { id: 6, tagName: 'SECTION', style: { color: 'gray', display: 'grid' }, classList: ['main-section'] },
    { id: 7, tagName: 'P', style: { color: 'green', display: 'block' }, classList: ['text-content'] },
    { id: 8, tagName: 'SPAN', style: { color: 'yellow', display: 'inline' }, classList: ['highlight'] },
    { id: 9, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'pending'] },
    { id: 10, tagName: 'FOOTER', style: { color: 'white', display: 'flex' }, classList: ['footer-area'] }
  ];

// atividade 01
//Atividade 1: Percorra o array usando for...of. Para cada objeto, 
// adicione uma nova propriedade dentro de style chamada backgroundColor com o valor '#FFFFFF'. 
// No final, exiba o array modificado.

  for (let elemento of elementosFake) {
    elemento.style.backgroundColor = '#FFFFFF';
  }
  
  console.log(elementosFake);

  // atividade 02
//Atividade 2: Use o forEach para iterar no array. Dentro dele, para cada elemento, 
// use o for...in para verificar se a propriedade id existe. Se existir, altere o valor 
// de id para que ele se torne uma string no formato "ID-01", "ID-02", etc. 
// No final, exiba o array modificado.

  console.log(`----------ATIVIDADE 02----------`)
elementosFake.forEach(elemento => {
    for (const chave in elemento) {
        if (chave == "id"){
            elemento[chave] = `ID-${elemento[chave]}`
        }
    } 
});
console.log(elementosFake)


  // ATIVIDADE 03
//Atividade 3: Use o método forEach. Verifique se no array classList do elemento atual existe a string "pending". Se existir:
//Remova "pending".
//Adicione "done".
//Altere a cor (style.color) para 'green'.
//No final, exiba o array modificado.

  console.log(`----------ATIVIDADE 03----------`)
  elementosFake.forEach(elemento => {
    for (const chave in elemento.classList) {
        if (elemento.classList[chave] == "pending"){
            elemento.classList[chave] = "done"
            elemento.style.color = 'green'
        }
    }
  })
console.log(elementosFake)

  // ATIVIDADE 04
//Atividade 4: Use o for...of para percorrer a lista. Sempre que encontrar um elemento com tagName igual a 'DIV',
//  altere essa propriedade para 'SECTION' e adicione a classe 'converted' ao seu classList. 
// No final, exiba o array modificado.

  console.log(`----------ATIVIDADE 04----------`)
  for (let elemento of elementosFake) {
    if (elemento.tagName == "DIV"){
        elemento.tagName = "SECTION"
        elemento.classList.push("converted")
    }
  }
  
  console.log(elementosFake);


  // ATIVIDADE 05
  //Atividade 5: Crie um novo array vazio chamado relatorioDeEstilos.
  // Use forEach em elementosFake para percorrer os elementos e adicione em relatorioDeEstilos somente o 
  // id, tagName e style vindos do array elementosFake. 
  // No final, exiba o novo array.

  console.log(`----------ATIVIDADE 05----------`)

let relatorioDeEstilos = []

elementosFake.forEach(elemento => {
    relatorioDeEstilos.push({
        id: elemento.id,
        tagName: elemento.tagName,
        style: elemento.style
    })
});

console.log(relatorioDeEstilos);