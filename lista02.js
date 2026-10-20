const elementosFake = [
    {
      tagName: 'DIV',
      style: { color: 'blue', display: 'flex' },
      classList: ['container', 'active']
    },
    {
      tagName: 'H1',
      style: { color: 'red', display: 'block' },
      classList: ['title']
    },
    {
      tagName: 'BUTTON',
      style: { color: 'white', display: 'inline-block' },
      classList: ['btn', 'btn-primary']
    }
  ];
  
  // atividade 01

  console.log(`----------ATIVIDADE 01----------`)

const primeiroElemento = elementosFake[0];

for (let chave in primeiroElemento) {
  console.log(chave, ':', primeiroElemento[chave]);
}

// atividade 02

console.log(`----------ATIVIDADE 02----------`)

for (let i = 0; i < elementosFake.length; i++) {
    const elemento = elementosFake[i];
    
    if (elemento.style.color === 'blue') {
      console.log(`O elemento ${elemento.tagName} é azul!`);
    }
  }

// atividade 03

console.log(`----------ATIVDADE 03----------`)

  elementosFake.forEach(elemento => {
   console.log(`Nome da tag: ${elemento.tagName}`);
  });

  // atividade 04

  console.log(`----------ATIVIDADE 04----------`)

  elementosFake.forEach(elemento => {
    const qtdClasses = elemento.classList.length;
    console.log(`Tag: ${elemento.tagName} | Quantidade de classes: ${qtdClasses}`);
  });

// atividade 05

console.log(`----------ATIVIDADE 05----------`)

elementosFake.forEach(elemento => {
  const qtdClasses = elemento.classList.length;
 const nomeClasses = elemento.classList
 console.log(`Tag: ${elemento.tagName} | Quantidade: ${qtdClasses} | Classes: ${nomeClasses}`);
});