import { useState } from 'react'
import {GlobalStyle} from './styles/global'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import TransactionTable from './components/TransactionTable/TransactionTable'
import NewTransactionModal from './components/Modals/NewTransactionModal/NewTransactionModal'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  } 

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal}/>
      <Dashboard/>
      <TransactionTable/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </> 
  );
}
