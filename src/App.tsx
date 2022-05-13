import { useState } from 'react';
import Modal from 'react-modal';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import NewTransactionModal from './Components/NewTransactionModal';
import { GlobalStyle } from './styles';

Modal.setAppElement('#root');

const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
