function bissexto(anoFinal){
    for(let i = 2000; i<= anoFinal; i++){
        if(i%4==0){
            console.log(i)
        }
    }
}
bissexto(2100)