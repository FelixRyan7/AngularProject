import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerFilter',
  standalone: true
})
export class PlayerFilterPipe implements PipeTransform {

  // players es el arrgelo de jugadores que se saca desde el html de players y filterParams sisrve para sacar la edad y la posicion seleccionada en el html de players 
  transform(players: any[], filterParams: any): any[] {
    // Verifiamos si el arreglo de jugadores existe y se pasa correctamente. si no existe se devuelve un array vacio
    if (!players) {
      return [];
    }

    //destructuramos age y position que vienen del objeto filterParams del metodo transform para usarlos 
    const { age, position } = filterParams;
    
    return players.filter(player => {
      // Se verifica si hay una edad seleccionada y si la edad del jugador no coincide con la edad seleccionada. Si es asi, se devuelve false  y se indica que el jugador no se incluyte en el resultado final
      if (parseInt(age) && player.edad !== parseInt(age)) {
        return false;
        // La misma logica aplicada para el filtro de edad se hace para la posicion.
      }
      if (position && player.posicion !== position) {
        
        return false;
      }
      // Si el jugador pasa ambos filtros, se devuelve true, lo que indica que debe incluirse en el resultado final.
      return true;
    });
  }

}
