let precos = [100,512,31,50,120]

function calcPreco(array){
    let total = 0
    for (item of array){
        total += item
    }
    return total
}
console.log(calcPreco(precos))