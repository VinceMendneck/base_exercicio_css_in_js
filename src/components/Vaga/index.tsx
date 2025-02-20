import {
  VagaStyle,
  VagaTitulo,
  VagaLista,
  VagaItem,
  VagaLink
} from './Vaga.module'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaStyle>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <VagaLista>
      <VagaItem>Localização: {props.localizacao}</VagaItem>
      <VagaItem>Senioridade: {props.nivel}</VagaItem>
      <VagaItem>Tipo de contratação: {props.modalidade}</VagaItem>
      <VagaItem>
        Salário: {props.salarioMin} - {props.salarioMax}
      </VagaItem>
      <VagaItem>Requisitos: {props.requisitos.join(', ')}</VagaItem>
    </VagaLista>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaStyle>
)

export default Vaga
