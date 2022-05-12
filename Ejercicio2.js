class Auto {
    constructor(marca, modelo, año_de_fabricacion, cantidad_puertas){
        this.marca = marca;
        this.modelo = modelo; 
        this.año_de_fabricacion = año_de_fabricacion;
        this.cantidad_puertas = cantidad_puertas
    }
    
    Acelerar(){
        console.log('Acelerando...');
    }
    subiendoVidrios(){
        console.log(('subiendo vidrios'));
    }
}

// ************************

class Autos {
    constructor(marca, modelo, año_de_fabricacion, cantidad_puertas, combustible){
        this.marca = marca;
        this.modelo = modelo; 
        this.año_de_fabricacion = año_de_fabricacion;
        this.cantidad_puertas = cantidad_puertas
        this.combustible = combustible;
    }
    
    Acelerar(){
        console.log(`Acelerando a ${combustible}`);
    }
    subiendoVidrios(){
        console.log(('subiendo vidrios'));
    }
}
