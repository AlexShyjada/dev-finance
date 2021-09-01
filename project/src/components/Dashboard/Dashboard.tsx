import React from 'react'
import {Container} from './styles'
import {Summary} from './styles'
import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

export default function Dashboard() {
  return (
    <Container>
      <Summary>
        <div>
          <header>
            Entradas
            <img src={entradasImg} alt="" />
          </header>
          <strong>R$1000,00</strong>
        </div>
        <div>
          <header>
            Saídas
            <img src={saidasImg} alt="" />
          </header>
          <strong>- R$500,00</strong>
        </div>
        <div className="cardTotal">
          <header>
            Total
            <img src={totalImg} alt="" />
          </header>
          <strong>R$1000,00</strong>
        </div>
      </Summary>
    </Container>
  )
}
