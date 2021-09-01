import React from 'react'
import { useEffect } from 'react'
import { Container } from './styles'
import {api} from '../../services/api'
import removerImg from '../../assets/remover.svg'

export default function TransactionTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th >Título</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Categoria</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>13/04/2020</td>
            <td>Pagamento</td>
            <td>
              <button>
                <img src={removerImg} alt="" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="withDraw">- R$ 6.000,00</td>
            <td>13/04/2020</td>
            <td>Pagamento</td>
            <td>
              <button>
                <img src={removerImg} alt="" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
