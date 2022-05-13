import Summary from '../Summary/summary';
import TransactionsTable from '../TransactionsTable';
import { Containter } from './style';

const Dashboard = () => {
  return (
    <Containter>
      <Summary />
      <TransactionsTable />
    </Containter>
  );
};

export default Dashboard;
