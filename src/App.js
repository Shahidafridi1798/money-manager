
import { AddTransaction } from './AddTransaction';
import './App.css';
import { Balance } from './Balance';
import { Header } from './Header';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { GlobalProvider } from './GlobalState';




function App() {
  return (  
    
    <div className="App">
      <GlobalProvider />
      
        <Header />
    <div className='container'>
      <Balance />
      <IncomeExpenses />
      <TransactionList  />
      <AddTransaction />
    </div>
    <GlobalProvider />
    </div>
  );
}

export default App;


