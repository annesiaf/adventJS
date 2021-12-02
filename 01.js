// Considera una lista/array de ovejas.
// Cada oveja tiene un nombre y un color.
// Haz una función que devuelva una lista con todas las ovejas que sean de color rojo
// y que su nombre contenga las letras n y a, sin importar el orden, las mayúsculas o espacios.

// Por ejemplo, si tenemos las ovejas:

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];

// Al ejecutar el método debería devolver lo siguiente:

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
// [({ name: "Navidad", color: "rojo" }, { name: "Ki Na Ma", color: "rojo" })];

// Resolucion con razonamiento propio:

// 0. Razonamiento:
// 1. Filtrar la cantidad de ovejas que sean de color rojo
// 2. Filtrar las ovejas que tengan n && a en su nombre
// 3. Optimizar codigo

// Procedimiento:
// 1. Hice la task 1 & 2 por separadas.
// 2. Optimice codigo

// Filtrar ovejas color roja
const ovejasRojas = ovejas.filter((roja) => roja.color === "rojo");
console.log(ovejasRojas);

// Filtrar por n & a (Pense en recorrer el arreglo, convirtiendo todos los names toLowerCase, pero...)
const haveLetter = ovejas.filter((letter) =>
  letter.name.includes("a", "n", "A", "N")
);
console.log(haveLetter);

// Optimizacion de codigo:
let ovejasConAN = ovejas.filter(
  (result) => result.name.includes("a", "A", "n", "N") && result.color == "rojo"
);

console.log(ovejasConAN);

// El test del ejercicio me obliga a usar toLowerCase, asi que, refactoring time! ...
ovejas.filter(
  (result) =>
    result.name.toLowerCase().includes("a" && "n") && result.color == "rojo"
);
// F5: Hmmm, en mi codigo anda, pero en la pagina... "Algunos test fallaron" !??
// Seguro me esta faltando algo por validar :D o, quizas...

// Dos doritos despues... Resolucion final:
export default function contarOvejas(ovejas) {
  const ovejitas = ovejas.filter((oveja) => {
    oveja.name.toLowerCase();
    if (name.includes("a", "n") && oveja.color == "rojo") return oveja;
  });

  return ovejitas;
}
