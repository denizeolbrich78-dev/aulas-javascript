const arrayMaior = [
    [
      { nome: "João", idade: 25 },
      { nome: "Maria", idade: 30 }
    ],
    [
      { nome: "Pedro", idade: 40 }
    ]
  ];
  console.table(arrayMaior);
  // Achata o array e mantém apenas objetos com "nome"
  const arrayParaTabela = arrayMaior.flat().map(item => ({
    nome: item.nome
  }));
  
  console.table(arrayParaTabela);
  