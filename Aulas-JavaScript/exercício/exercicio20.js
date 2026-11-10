let salarios = [1500,2000,3000,5000,15000,8000]

const verificarSalarios = array => {
    let gastoTotal = 0
    for (salario of array){
        if (salario<2000){
            gastoTotal += (salario*1.1)
        }else{
            gastoTotal += salario
        }
    }
    return gastoTotal
}

console.log(verificarSalarios(salarios))