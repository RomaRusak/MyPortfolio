import { Link, Outlet } from "react-router-dom"
import Transaction from "./Transaction"
import TransactionsArrBack from './images/transactionsarrback.svg'
import IconPlus from './images/Iconplus.svg'

const Transactions = ({transactions}) => {

    return (
        <div className="transactions-wrapper">
            <h2>Transactions</h2>
            <div className="transactions-container">
                {!transactions.length && <p className="empty">Нету транзакций</p>}
                {transactions.map((tr,index) => <Transaction key={index} index={index}  {...tr}/>)}
            </div>
            <div>
                <Link to={'modal'}>
                    <img src={IconPlus} alt="" />
                </Link>
            </div>
            <Link to={'/'}>
                <img className="transactions-arr-back" src={TransactionsArrBack} alt="" />
            </Link>
            <Outlet />
        </div>
    )
}

export default Transactions