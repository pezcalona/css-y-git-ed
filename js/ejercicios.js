//ejemplo de clase
let nombre= "rene"
let saludo= "hola "

//alert(saludo+ nombre)

//ejercicio 1
let n= 5
let m= 6
let r= n + m

console.log (r)

//ejercicio 2
let a= 1
let b= 2
let c= 3
let d= 4
let e= 5

let z= a * b * c * d * e

console.log (z)

//ejercicio 3
let x= 8
let y= 10
let zeta= 90

let w =((x+zeta)*y*y)

console.log(w)

//ejercicio 4

let texto1= "hola"
let texto2= " mundo"

console.log(texto1+texto2)

//ejercico 5

let a1 = "5"
let b1 = "3"
let c1 = "7"
let d1 = a1+b1+c1

console.log(a1+"+"+b1+"+"+c1+"=" + d1)

//ejercicio 5

let usuario1 = { nombre: "juan", apellido: "perez" }
let usuario2 = { nombre: "sara", apellido: "aparicion" }
let usuario3 = { nombre: "sebastián", apellido: "gonzales" }
let usuario4 = { nombre: "catalina", apellido: "rodriguez" }
let usuario5 = { nombre: "laura", apellido: "quintanilla" }
let usuario6 = { nombre: "camila", apellido: "lopez" }
let usuario7 = { nombre: "carlos", apellido: "gutierrez" }
let usuario8 = { nombre: "sergio", apellido: "chacon" }
n = 7
if (n == 1) {
    console.log("Hola, "+ usuario1.nombre + " " + usuario1.apellido)
}else if(n == 2) {
    console.log("Hola, "+ usuario2.nombre + " " + usuario2.apellido)
}else if(n == 3) {
    console.log("Hola, "+ usuario3.nombre + " " + usuario3.apellido)
}else if(n == 4) {
    console.log("Hola, "+ usuario4.nombre + " " + usuario4.apellido)
}else if(n == 5) {
    console.log("Hola, "+ usuario5.nombre + " " + usuario5.apellido)
}else if(n == 6) {
    console.log("Hola, "+ usuario6.nombre + " " + usuario6.apellido)
}else if(n == 7) {
    console.log("Hola, "+ usuario7.nombre + " " + usuario7.apellido)
}else if(n == 8) {
    console.log("Hola, "+ usuario8.nombre + " " + usuario8.apellido)
}else{
    console.log("Usuario no registrado")
}

let usuarios = [usuario1, usuario2, usuario3, usuario4, 

    usuario5, usuario6, usuario7, usuario8]

if (n <= usuarios.length) {

    console.log("Hola con arreglo, " + usuarios[n-1].nombre + " " + usuarios[n-1].apellido)    

}else{

    console.log("Usuario no registrado")

}

//Ejercicios IF
//1. Dado un número b realizar la siguiente operación

// if(b<10) {
//    return 2;
//}
//else     {
//    return 4;
//}
//console.log(b);

a = 1
b = 2

if (a > b) {
    console.log( a + "es mayor")
}else {
    console.log(b + " es mayor")
}

// cuál es mayor, cuál es menor o son iguales?

a= 30
b= 10

if (a > b){
    console.log(a +" es mayor y "+ b + " es menor")
}else if(b > a){
    console.log(b +" es mayor y " + a + "es menor")
}else {
    console.log(a+ "y " + b + " son iguales")
}

// determinar un numero par
n = 5

if (n%2==0) {
    console.log("El número "+ n +" es par");

} else {
    console.log("El número "+ n +" es impar");
}

//la división modular es con %
//esta busca hacer una division y obtener el residuo

n = 47
let residuo = n % 2

if(residuo == 0 ) {
    console.log(n+ " es par")
}else {
    console.log(n + "es impar")
}

if (residuo != 0){
    console.log(n + "es impar")
}
if (residuo > 0){
    console.log(n + "es impar")
}
if (residuo == 1) {
    console.log(n+ " es impar")
}

//ejercicio 2.6 ejemplo Leandro

let categoriaA = "Todo Publico"
let categoriaB = "Desde 9 años"
let categoriaC = "Desde 18 años"
let categoriaD = "Desde 25 años"

let edad=10 /*variar el valor numerico para edad y realizar pruebas*/

if (edad<9) {

    console.log(categoriaA + " : " + edad);

}else if (edad >=9 && edad <18) {

    console.log(categoriaB + " : " + edad);

    }else if (edad >=18 && edad <25) {

console.log(categoriaC + " : " + edad);

    }else  {

console.log(categoriaD + " : " + edad); 

}

//ejemplo patricio lopez

edad=9
categoria="D"

if (edad > 24 || categoria == "A") {

    console.log("BIENVENIDO! Todo Publico")

} else if (edad > 17 && categoria == "D") {

    console.log("NO PASAR")

} else if (edad > 8 && categoria != "B") {

    console.log("PA LA CASA!")

} else if (edad < 9 && categoria != "A") {

    console.log("PA LA CASA!")

} else console.log("BIENVENIDO!")

//Ejercicio categorias
//A => Todo público
//B => Desde 9 años
//C => Desde 18 años
//D => Desde 25 años

let edad = 5
let categoria = "A"

if (categoria == "A") {
    console.log("si puede ver la película")
}else if (categoria == B){
    it (edad >= 9){
        console.log("si puede ver la película")
    }else{
        console.log("no puede ver la película")
    }
}