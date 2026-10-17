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
  

for (const nome in elementosFake) {
  console.log(nome, ':', elementosFake[nome]);
}


const cor = { elementoFake: [], ativo: false };
const atualizado = { ...cor, ativo: true };

console.log(atualizado); // { nome: 'Ana', ativo: true }



