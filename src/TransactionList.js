import { useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalState";
import { Transaction } from "./Transaction";


export const TransactionList = ( transaction ) => {
  const  { transactions, getTransaction } = useContext(GlobalContext);

  // useEffect(() => {
  //   getTransaction();
  // },[]);
  
  return (
    <>
      <h3>History</h3>
      <ul id="list" className='list'>
        {transactions.map(transaction => (
         <Transaction key={transaction.id} transaction={transaction} />
        ))}
        
      </ul>
    </>
  );
};
