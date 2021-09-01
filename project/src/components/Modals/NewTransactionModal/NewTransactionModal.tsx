import Modal from 'react-modal'
import {Container} from './styles'
import {TransactionTypeContainer} from './styles'
import closeIMG from '../../../assets/close.svg'
import entradasIMG from '../../../assets/entradas.svg'
import saidasIMG from '../../../assets/saidas.svg'

interface INewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: INewTransactionModalProps){


  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="newTransactionModalOrverlay"
      className="newTransactionModalContent"
    >

      <button
        type="button"
        className="modalClose"
        onClick={onRequestClose}
      >
        <img src={closeIMG} alt="" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={entradasIMG} alt="" />
            Entrada
          </button>

          <button
            type="button"
          >
            <img src={saidasIMG} alt="" />
            Saída
          </button>
        </TransactionTypeContainer>
        <input placeholder="Categoria" />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}