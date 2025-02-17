class Prato {
  Titulo: string
  image: string
  destaque: string[]
  texto: string
  nota: string

  constructor(
    Titulo: string,
    image: string,
    destaque: string[],
    texto: string,
    nota: string
  ) {
    this.Titulo = Titulo
    this.image = image
    this.nota = nota
    this.texto = texto
    this.destaque = destaque
  }
}

export default Prato
