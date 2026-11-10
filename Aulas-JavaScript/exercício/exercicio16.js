let vips = ["Denize","Lucas","Yasmin","Karina","Ryan","Rafaela","Andrew","Gabriel"]

const verificarVips = nomeBuscado =>{
    for (vip of vips){
        if (vip == nomeBuscado){
            return true
        }
    }
    return false
}

console.log(verificarVips("Lucas"))