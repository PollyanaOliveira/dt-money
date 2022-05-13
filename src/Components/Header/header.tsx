import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}
const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Pandas Financial" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
