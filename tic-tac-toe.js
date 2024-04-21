function Players(name){
  const playerName='@'+ name;

  let puntuacion=0;
  let marcador;
  const añadirPutacion=() => puntuacion++;
  const mostrarPuntuacion=() => puntuacion;
  const mostrarMarcador =() => marcador;
  return{ playerName , mostrarPuntuacion,mostrarMarcador,añadirPutacion}
}



function tablero(jugador1,player2) {
    const jugador1= Players('jugador1');
    const player2= Players('player2');
    const {mostrarMarcador}=Players();

    const celdas=[  1,2,3,
                    4,5,6,
                    7,8,9 ];

    
}