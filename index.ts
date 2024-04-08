//muestra algo
console.log("Algo");

//console.info: es equivalente a log pero es usado para informar.
console.info("Algo");

//mostrar error en rojo
console.error("Error");

//Advertencias, en amarillo
console.warn("Algo");

//Mostrar datos en tabla
var tabla = [
  {
    a: 1,
    b: "z",
  },
  {
    a: 2,
    b: "Otra",
  },
];
console.table(tabla);

//Agrupar varios console.logs
console.group('Conversación')
console.log('Hola');
console.log('blablabla');
console.log('blablabla');
console.log('blablabla');
console.log('Adios');
console.groupEnd();

//count inicia contador
//reset resetea el contador
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');