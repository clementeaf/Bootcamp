// Ejercicio Aincrónico 01

class Libro {
    constructor(nombre_del_libro, autor, editorial, genero){
        this.nombre_del_libro = nombre_del_libro;
        this.autor = autor; 
        this.editorial = editorial;
        this.genero = genero
    }
    
    mostrarLibro(){
        // console.log(`The book name is ${this.nombre_del_libro} written by ${this.autor} belong to the editorial ${this.editorial} and its a ${this.genero} text`);
    }
}

const libro1 = new Libro("El Economista Callejero", "Axel Kaiser", "El mercurio", "Economía");
libro1.mostrarLibro();
const libro2 = new Libro("El Capital", "Adam Smith", "Sombrero", "Economía");
libro2.mostrarLibro();
const libro3 = new Libro("Python", "Desconocido", "ABC", "Informática");
libro3.mostrarLibro();

// *******************
let libros = [];

libros.push(libro1, libro2, libro3)

// console.log(libros);

// *************************
function filtrarPorAutor(obj, autor){
   let val = obj.filter((e) => {return(e.autor)})
   if(val = 'Axel Kaiser') {
       console.log(autor);
   }
}

filtrarPorAutor(libros, 'Axel Kaiser')