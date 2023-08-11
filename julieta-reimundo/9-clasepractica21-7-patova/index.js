// consigna: programar un sistema llamado patovica
// nacesitamos preguntarle al usuario su edad e identificar si es mayor de edad o no
// si es mayor de edad puede ingresar al bolice
// sino no puede ingresar
// si el usuario es mayor de 21 anhos puede consumir bebidas alcoholicas
// sino no 

// analisis



// datos de entrada:
//  -edadUsuario
//  -edadIngreso
//  -resultado
//  -edadAlcohol

// Resolucion:
// INICIIO PROGRAMA 'Patovica'
//  DECLARA edadIngreso, edadAlcohol, edadUsuario COMO ENTERO
//  edadIngreso = 18
//  edadAlcohol = 21
//  edadUsuario = PEDIR ('INGRESE EDAD')
//  edadUsuario = EVALUAR_ENTERO (edadUsuario)
//  SI edadUsuario ES MENOR a edadIngreso ENTONCES:
//         MENSAJE : ('NO PUEDE INGRESAR')
//  SINO ENTONCES:
//         MENSAJE:N ('PUEDE INGRESAR')
//      SI edadUsuario ES MENOR a edadAlcohol ENTONCES:
//          MENSAJE: ('NO PUEDE COMPRAR ALCOHOL')
//      SINO ENTONCES
//          MENSAJE: ('PUEDE CONSUMIR ALCOHOL)
//      FIN SI
// FIN PROGRAMA


// datos de alida
//  - puede ingresar
//  - no puede ingresar
//  - puede comprar alcohol
//  - no puede comprar alcohol


function main() {
    const edadIngreso = 18
    const edadAlcohol = 21
    let edadUsuario0 = prompt('Ingrese su edad')
    let edadUsuario = Number(edadUsuario0)

    if (edadUsuario != Number(edadUsuario)) {
        alert ('Ingrese un numero valido')
        
    } else {

    if (edadUsuario < edadIngreso) {
        // alert ('NO PUEDE INGRESAR')
        Swal.fire({
            title: 'NO PUEDE INGRESAR',
            text: '',
            imageUrl: 'https://previews.123rf.com/images/andreypopov/andreypopov1601/andreypopov160100278/50245634-conf%C3%ADa-en-la-toma-de-guardia-de-seguridad-gesto-de-la-parada-delante-de-la-puerta.jpg',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
          
    } else {
        // alert ('PUEDE INGRESAR')
        Swal.fire({
            title: 'PUEDE INGRESAR',
            text: '',
            imageUrl: 'https://edxho9cuw7k.exactdn.com/wp-content/uploads/2020/06/Guardias-de-seguridad-de-patrulla-movil-para-detener-crimenes.jpg',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'SEGURIDAD',
          }) // este se lo saltea, si pongo el alert normal no se lo saltea

        if (edadUsuario < edadAlcohol) {
            // alert ('NO PUEDE COMPRAR ALCOHOL')
            Swal.fire({
                title: 'NO PUEDE COMPRAR ALCOHOL',
                text: '',
                imageUrl: 'https://edxho9cuw7k.exactdn.com/wp-content/uploads/2020/06/Guardias-de-seguridad-de-patrulla-movil-para-detener-crimenes.jpg',
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: 'SEGURIDAD',
              }) 
            
        } else {
            // alert ('PUEDE COMPRAR ALCOHOL')
            Swal.fire({
                title: 'PUEDE COMPRAR ALCOHOL',
                text: '',
                imageUrl: 'https://lmdiario.com.ar/download/multimedia.normal.87ff836ad5eacd12.64616e69656c20656d706174655f6e6f726d616c2e6a7067.jpg',
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            
        }
    }


    
    
}
}