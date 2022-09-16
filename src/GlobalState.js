
import {AppReducer} from "../AppReducer.js";
import { createContext, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    transactions:
    [
      { id: 1, text: "Fuel", amount: -400},
      { id: 2, text: "Salary", amount: 10000},
      { id: 3, text: "Book", amount: -1000},
      { id: 4, text: "Camera", amount: 120}
    ],
    error: null,
    loading:true
  }


  //Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({it}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransaction(){
    try {
      const res = await axios.get('/transaction');

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
    }
  }
  async function deleteTransaction(id) {
    try {
      await axios.delete('/transaction/${id}');
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
    }
   
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    try {
      const res = await axios.post('/transaction', transaction, config);
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
    });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
      
    }

  }


  return (<GlobalContext.Provider
  value={{
   transactions: state.transactions,
   error: state.error,
   loading: state.loading,
   getTransaction,
   deleteTransaction,
   addTransaction
  }}>
   
    {it}
  </GlobalContext.Provider>);
}
