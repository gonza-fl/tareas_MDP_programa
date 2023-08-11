const arrContenedor = [
    [1,2,3],
    ['hola','test', 'test2'],
    [null, true, false],
  ]
  
  console.log (arrContenedor)
  
  
  for (let i = 0; i < arrContenedor.length; i++) {
    const arrInterno = arrContenedor[i];
    for (let j = 0; j < arrInterno.length; j++) {
      console.log(arrInterno[j]);
    } 
  }