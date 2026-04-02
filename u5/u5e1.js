// T1. Uso avanzado de funciones
// U5. Closures
// Enunciado disponible en u5e1.md / Enunciat disponible a u5e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

const converter = (function(){

    function generate(text){

    if (typeof text !== "string") return false
   
    return text.toLowerCase()
    .replace(/[aá]/g, '1')
    .replace(/[eé]/g, '2')
    .replace(/[ií]/g, '3')
    .replace(/[oó]/g, '4')
    .replace(/[uúü]/g, '5');
}
return generate;
})();




/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { converter };
