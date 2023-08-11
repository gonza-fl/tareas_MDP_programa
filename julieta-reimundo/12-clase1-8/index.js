class Galleta {
  constructor(color, btns, tamanho) {
    this.color = color
    this.btns = btns
    this.tamanho = tamanho
    
  }
   getColor() {
    return this.color
  }
    getBtns() {
    return this.btns
  }
    getTamanho() {
      return this.tamanho
  }
    setColor(nuevoColor) {
      this.color = nuevoColor
  }
    setBtns(nuevoBtn) {
      this.btns = nuevoBtn
  }
    setTamanho(nuevoTamanho) {
      this.tamanho = nuevoTamanho
  }
}

const galletitaRoja = new Galleta('rojo', 2, 'mid')

galletitaRoja.getColor()
galletitaRoja.getTamanho()
galletitaRoja.setColor('rojita')
galletitaRoja.getColor()
galletitaRoja.setBtns(3)
      
const galletitaMarron = new Galleta ('marron', 4, 'large')

galletitaMarron.getColor()
galletitaRoja.getColor()

const galletitaAzul = new Galleta ('azul', 3, 'small')

galletitaAzul.getColor()