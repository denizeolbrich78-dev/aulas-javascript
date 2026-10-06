function gastarEnergia(energiaInicial){
    while(energiaInicial>0){
        energiaInicial -= 10
        console.log(energiaInicial)
    }
}
gastarEnergia(200)