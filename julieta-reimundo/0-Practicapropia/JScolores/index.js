function changeColor() {
    let square = document.getElementById('cuadrado');
    let newColor = getRandomColor();
    square.style.backgroundColor = newColor;
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }