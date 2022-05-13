import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Pandas Financial" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
};

export default Header;
