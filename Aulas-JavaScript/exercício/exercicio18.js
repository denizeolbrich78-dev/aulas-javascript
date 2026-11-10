let booleanos = [true, false,false,true,true,true,false,false,false]

function verificarBooleanos(array){
    let valores = []
    for(booleano of array){
        valores.push(booleano==false?'Pendente':'Concluído')
    }
    return valores
}

console.log(verificarBooleanos(booleanos))