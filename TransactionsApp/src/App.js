import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import { useState , createContext} from 'react';
import './App.css';
import Home from './Components/Home';
import Transactions from './Components/Transactions';
import TransactionSelfPage from './Components/TransactionSelfPage';
import TransactionModal from './Components/TransactionModal'

let TransactionContext = createContext()
export {TransactionContext}

function App() {

  const [transactions, setTransactions] = useState([])

  const addTransactionHandler = (newtr) => {
    setTransactions([...transactions, newtr])
  }

  const removeTransactionHandler = (id) => {
    setTransactions(transactions.filter((tr, index) => {
        return index != id
    }))
  }

  return (
    <BrowserRouter> 
    <TransactionContext.Provider value={{transactions, addTransactionHandler, setTransactions, removeTransactionHandler}}>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='transactions' element={<Transactions transactions={transactions} />}>
          <Route path='modal' element={<TransactionModal />}></Route>
        </Route>
        <Route path='transactions/:id' element={<TransactionSelfPage />}></Route>
      </Routes>
    </div>
    </TransactionContext.Provider>
    </BrowserRouter>
  );
}

export default App;
