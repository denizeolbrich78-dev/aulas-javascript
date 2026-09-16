const frutas = ['Maçã', 'Banana', 'Uva'];

frutas.push('laranja');
frutas.push('abacaxi');
frutas.push('cereja');
frutas.pop(); 
frutas.shift();

for (const fruta of frutas) {

  console.log(fruta);
}