import Modal from 'react-modal';

interface NewTrasactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTrasactionModal = ({
  isOpen,
  onRequestClose
}: NewTrasactionModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Cadastrar Transação</h2>
    </Modal>
  );
};

export default NewTrasactionModal;
