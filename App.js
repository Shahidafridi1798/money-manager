
import { AddTransaction } from './AddTransaction';
import './App.css';
import { Balance } from './Balance';
import { Header } from './src/Header';
import { IncomeExpenses } from './src/IncomeExpenses';
import { TransactionList } from './src/TransactionList';
import { GlobalProvider } from './src/GlobalState';




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


