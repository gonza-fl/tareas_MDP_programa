class Pepita {
    constructor(joules = 0,) {
        this.energia = joules
        this.comer(100)
    }
    comer(gr) {
        this.energia += gr * 4
    }
    volar(km){
        this.energia -= km
    }
    despegarAterrizar(){
        //cuesta 10
        this.energia -= 10
    }
 
    getEnergia() {
        return this.energia;
    }
}
 
const pepitaLATAM = new Pepita(100)


// pepita.comer(100)
pepitaLATAM.despegarAterrizar()
pepitaLATAM.volar(10)
pepitaLATAM.volar(10)
pepitaLATAM.despegarAterrizar()
pepitaLATAM.getEnergia

const pepitaCanadiense = new Pepita(400)

pepitaCanadiense.despegarAterrizar()
pepitaCanadiense.volar(10)
pepitaCanadiense.volar(10)
pepitaCanadiense.despegarAterrizar()
pepitaCanadiense.getEnergia

function start (pepitaVersion){
    pepitaVersion.despegarAterrizar()
    pepitaVersion.volar(10)
    pepitaVersion.volar(10)
    pepitaVersion.despegarAterrizar()
    pepitaVersion.getEnergia
}
function main (){
    const pepitaCanadiense = new Pepita(400)
    const pepitaLATAM = new Pepita(100)

    start(pepita)
    start(pepitaLATAM)
    start(pepitaCanadiense)
    
}

main()