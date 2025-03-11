class Prato {
  Titulo: string
  image: string
  destaque: string[]
  texto: string
  nota: string
  id: number
  preco?: number

  constructor(
    Titulo: string,
    image: string,
    destaque: string[],
    texto: string,
    nota: string,
    id: number,
    preco: number
  ) {
    this.Titulo = Titulo
    this.image = image
    this.nota = nota
    this.texto = texto
    this.destaque = destaque
    this.id = id
    this.preco = preco
  }
}

export default Prato
