const listaUsuarios = [];

function traerDatos() {

    const usuario = {
    nombre: "",
    pass: "",
    }
    usuario.nombre = prompt('Ingrese Nombre');
    usuario.pass = prompt('Ingrese contrasenhia');
    listaUsuarios.push(usuario)
    console.log(listaUsuarios);
   
}

function mostrarDatos() {

    let indice= 0
    const ul = document.getElementById('listahtml');
    ul.innerHTML = ''
    ul.className = 'listahtml'; 
    while(indice<listaUsuarios.length){
        const usuario = listaUsuarios[indice];
        ul.innerHTML += `<li> Nombre de Usuario: ${usuario.nombre}</li>`;
        ul.innerHTML += `<li> Password: ${usuario.pass}</li> <br>`;
        indice = indice + 1
    }
}


function borrarUsuario(idx) {
  listaUsuarios.splice(idx, 1);
  mostrarListaUsuarios();
}
 


let frase = 'hola mundo';
console.log(frase);

function invertirTxt() {
    // Convertimos la cadena a un array de caracteres
    let caracteres = frase.split('');

    // Invertimos el array de caracteres
    caracteres.reverse();

    // Unimos el array de caracteres en una cadena nuevamente
    frase = caracteres.join('');

    console.log(frase);
}

invertirTxt();





 
 let test = null
 if(invertirTxt(frase) === 'odnum aloh') {
   test = true
   console.log(test)
 } else {
   test = false
   console.log('La funcion no pudo revertir correctamente el texto')
 }




