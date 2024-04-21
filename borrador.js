// Definir la matriz de números y la cadena de matrices
function Usuario(name){
    const userName='@'+ name;
  
    let puntuacion=0;
    
    const añadirPutacion=() => puntuacion++;
    const mostrarPuntuacion=() => puntuacion;
 
    return{ userName , mostrarPuntuacion,añadirPutacion}
  }
  function Players(name){
    const {mostrarPuntuacion,añadirPutacion}=Usuario(name)
    
    
    let turno=true;
    let marcador=[1,2,3];
    
    
    const darPrimerTurno =() =>  turno=true;
    const darSegundoTurno =() =>   turno=false;
    const mostrarMarcados =() => marcador;
    
    return{get turno(){return turno},marcador,name, mostrarMarcados, mostrarPuntuacion, añadirPutacion, darPrimerTurno, darSegundoTurno}
  }

  function cambiarTurnos(){
    turno=!turno;
    return turno;
  }

  const juan= Usuario('juan');
  const player1= Players(juan.userName);
  const rocio= Usuario('rocio');
  const player2=Players(rocio.userName);
  player1.añadirPutacion();
  player1.darPrimerTurno();
  player2.darSegundoTurno();
  console.log(player2.darSegundoTurno());
  console.log(player1.name, player1.turno ,player1.mostrarPuntuacion());
  console.log(player2.name, player2.turno ,player2.mostrarPuntuacion());
  juan.añadirPutacion();
  juan.añadirPutacion();
  console.log(juan.mostrarPuntuacion(),
    juan.userName)

  const tablero=function () {

    let celdas=[1,2,3,
                4,5,6,
                7,8,9];
     function quitarCelda(indice){
       let index=celdas.indexOf(indice)
       if(index !==-1){
        tablero.splice(index,1)

       }
    }
     function celdavalor(){
        return celdas;
    }
    return{quitarCelda,celdavalor}
  }
tablero.quitarCelda(1);
console.log(tablero.celdavalor());

/*console.log(tablero(player1,player2).mostrarturnoTablero())
*/















/*const verificarTresEnRaya = ({valorActual}) => {
    const esTresEnRaya = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    let coincidencias = 0;
    
    for (const matriz of esTresEnRaya) {
        coincidencias = 0; // Reiniciar coincidencias en cada iteración de la matriz
        for (const valor of matriz) {
            if (valorActual.includes(valor)) {
                coincidencias++;
            }
        }
        if (coincidencias === 3) {
            {return console.log('Ta Te Ti');}
        }
    }
    
    console.log('No hay Ta Te Ti');
}

const armarArrayMarcados=((name,celda) =>{
    let {mostrarMarcador}=Usuario(name)
    let valorActual=[];
  
    for (celda of celdas) {
     if (celda  == mostrarMarcador){
            valorActual.push(mostrarMarcador);
     }
     return{valorActual};
    }


})();*/