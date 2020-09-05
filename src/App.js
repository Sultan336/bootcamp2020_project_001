import React from 'react';
import { Header } from './Components/Header.js';
import { Balance } from './Components/Balance.js';
import { IncomeExpenses } from './Components/IncomeExpenses.js';
import { TransactionList } from './Components/TransactionList.js';
import './App.css';
import { AddTransaction } from './Components/AddTransaction.js';
import { GlobalProvider } from './Context/GlobalState.js';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
