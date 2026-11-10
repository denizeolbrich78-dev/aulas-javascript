const letra = 'z';

console.log('Analisando se determinada letra é vogal ou consoante...');
console.log (`letra: ${letra}`);

switch (true) {
    case letra =='a' || letra == 'e' || letra == 'i' || letra == 'u':
        console.log('A letra analisada é vogal');
        break;
    default:
        console.log('Aletra analisada é uma consoante');
}