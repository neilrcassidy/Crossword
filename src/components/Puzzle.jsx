import { Letter } from './'

const words = [
  "gato", "oso", "pez", "pato", "rana", "lobo", "toro", "ave", "foca", "zorro",
  "rojo", "azul", "gris", "rosa", "ocre", "lila", "verde", "negro", "mora", "vino",
  "sol", "flor", "agua", "lago", "mar", "nube", "pino", "roca", "río", "nido",
  "dar", "ver", "leer", "amar", "usar", "trae", "rompe", "gana", "anda", "sabe",
  "casa", "mesa", "vino", "luna", "luz", "pan", "sopa", "mano", "aire", "cielo"
];

const gridSize = 5

const GenerateLetters = (gridSize) => {
  let letters = []
  for(let i = 0; i<gridSize; i++){
    letters.push(<Letter />)
  }
  return letters
}

const GenerateRows = (gridSize) => {
  let rows = []
  for(let i = 0; i<gridSize; i++){
    rows.push(
      <div className={`flex flex-row`}>
        {GenerateLetters(gridSize)}
      </div>
    )
  }
  return rows
}

const Puzzle = () => {
  return (
    <>
      <div className={`border-4 border-black`}>
        {GenerateRows(gridSize)}
      </div>
    </>
  )
}

export default Puzzle