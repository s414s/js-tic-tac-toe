# Juego del tic-tac-toe ⭕ ❌

![](screenshot.png)

## Objetivo
El objetivo del ejercicio es conseguir realizar un juego completo del 3 en rayas, en su forma más simple.
Para ello, a partir del esqueleto proporcionado, será necesario implementar el resto de funcionalidad necesaria para hacer el juego.

Se plantea hacer el juego para 2 jugadores, pero también, de manera optativa poder competir contra una IA 🤖

Para ejecutar la aplicación y ver los cambios, puedes lanzar
```
$> npm install
$> npm start
```

Te lanzará un navegador y, cada vez que cambies algo en código lo podrás ver en tiempo real

## 📑 Instrucciones
- Preparar la aplicación para que lleve el control del tablero (puede ser un arrary multidimensional, con -1, 0 y 1)
- Indicar visualmente de quien es el turno
- Cada vez que se clicke en una casilla habrá que:
  - Comprobar si esa casilla no está ya en uso (no se puede pulsar encima de una casilla ya marcada)
  - Marcar en el tablero y visualmente la jugada
  - Comprobar si la nueva jugada hace que el jugador gane la partida
  - Comprobar si la nueva jugada hace que el tablero esté lleno
  - Pasar el turno al otro oponente (utilizar alguna variable global o una clase para controlarlo)

## 🤫 Ayuda
- Utiliza la propiedad `className` para cambiar entre X y O
- Puedes utilizar el mismo manejador (onclick) para todos los cuadrados, si escribes el selector correcto
- Puedes manejar una variable global para mantener el estado del tablero e ir anotando las jugadas
- La variable del tablero puede ser un array multidimensional https://medium.com/fractions/multidimensional-arrays-in-javascript-be344f27df0e

## 🖋️ Evaluación
Para puntuar correctamente, será necesario implementar TODOS los puntos obligatorios. Además, se puede elevar la nota utilizando los optativos (nunca podrá ser superior a 10).
Si se te ocurre algún otro punto "optativo", coméntalo con el profesor.

### Obligatorios
- (1 pto) Gestionar el click sobre las casillas para avanzar en la partida de manera correcta
  - No se puede pulsar sobre una casilla ya marcada
  - No se puede pulsar si ha terminado la partida
  - Marcar con el símbolo correspondiente (alternar cruces y rayas)
- (1 pto) Indicar en la parte de turno de qué jugador es el turno.
- (1 pto) Implementar el reset de la partida
- (1 pto) Implementar el algoritmo de comprobación de ganar/perder
- (1 pto) Mantener un registro de los movimientos de los usuarios en la tabla indicada



### Optativos
- (2 pto) Implementar la posibilidad de jugar contra la máquina
- (2 ptos) Implementar la gestión de la partida en una clase Game, con los métodos apropiados (checkWin, doMove...)
- (2 ptos) Permitir generar partidas con tableros más grandes (4x4, 5x5)
- (1 pto) Implementar opción de deshacer el último movimiento

