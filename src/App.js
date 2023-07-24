import './App.css';
import { Profile } from './components/homework-2/Profile';
import user from './user.json';
import { TransactionHistory } from './components/homework-2/TransactionHistory';
import transaction from './transactions.json';

const { username, tag, location, avatar, stats } = user;

function App() {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      {transaction.map(({ id, type, amount, currency }) => (
        <TransactionHistory
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </>
  );
}

export default App;