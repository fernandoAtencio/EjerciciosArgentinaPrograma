// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*
const miNombre = "fernando";
const nombreHijo = "juan";
const nombreUsuario = (prompt("Ingresá tu nombre") || "").toLowerCase().trim();

if (nombreUsuario === miNombre) {
  console.log(`Hola Tocayo! yo también me llamo ${nombreUsuario}`);
} else if (nombreUsuario === nombreHijo) {
  console.log(`Hola ${nombreUsuario}! te llamás como mi hijo`);
} else if (nombreUsuario.length === 0) {
  console.log(`Epa! No ingresaste ningún nombre`);
} else {
  console.log(`Hola ${nombreUsuario}!`);
}*/

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
/*
const edadUsuario = Number((prompt("Cuantos años tenes?") || "").trim());
const miEdad = 44;

if (edadUsuario === 0) {
  console.log(`No ingresaste una edad válida`);
} else if (edadUsuario > miEdad) {
  console.log(`${edadUsuario}! Sos mas viejo que yo`);
} else if (edadUsuario < miEdad) {
  console.log(`${edadUsuario}? Uy, yo soy mas viejo!`);
} else if (edadUsuario === miEdad) {
  console.log(`${edadUsuario}? Parece que tenemos la misma edad`);
} else {
  console.log(`No ingresaste una edad válida`);
}
*/
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function entradaAlBar() {
  const edadMinimaParaEntrar = 18;
  preguntarSiTieneDNI() === true ? preguntarEdad(edadMinimaParaEntrar) : null;
}
function preguntarSiTieneDNI() {
  const preguntaPorDNI = prompt("Trajiste tu DNI?") || "".toLowerCase().trim();
  if (preguntaPorDNI === "si") {
    return true;
  } else if (preguntaPorDNI === "no") {
    console.log(`Tenés que traer tu DNI`);
    return false;
  } else {
    console.log(`Tenés que responder si o no`);
    return preguntarSiTieneDNI();
  }
}

function preguntarEdad(limiteMinimoDeEdad) {
  const edadUsuario = Number(prompt("Cuantos años tenés?") || "".trim());
  if (edadUsuario >= limiteMinimoDeEdad) {
    console.log(`Podés entrar al bar`);
  } else if (edadUsuario < limiteMinimoDeEdad) {
    console.log(`Acá no entran menores`);
  } else {
    console.log(`No entendí la respuesta`);
  }
}
entradaAlBar();
