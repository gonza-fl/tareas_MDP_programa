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

 




