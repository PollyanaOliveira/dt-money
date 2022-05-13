import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './style';

const TransactionsTable = () => {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>10/05/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.500,00</td>
            <td>Casa</td>
            <td>20/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
