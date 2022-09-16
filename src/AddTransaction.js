import {useContext, useState} from "react";
import { GlobalContext } from "./GlobalState";


export const AddTransaction = ( {AddTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
// const { AddTransaction } = useContext(GlobalContext);

// const onSubmit = event => {
//   event.preventDefault() ;

  // const newTransaction = {
  //   id: Math.floor(Math.random() * 100000000),
  //   text: text,
  //   amount: +amount,
  // };

//   AddTransaction(newTransaction);
// }

  return (
    <>
      <h3>Add new transaction</h3>
      <form >
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder='Enter text ...' />
        </div>
        <div>
          <label htmlFor='amount'>Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder='Enter amount...' />
        </div>
        <button onClick={() => {
          const newTransactions = {
            text: text,
            amount: amount,
          };
        }} className='btn'>Add transaction</button>
      </form>
    </>
  );
};
