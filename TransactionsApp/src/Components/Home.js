import { useContext } from "react"
import { TransactionContext } from "../App"
import { Link } from "react-router-dom"
import MainImg from './images/mainImg.png'


const Home = () => {

    const {transactions} = useContext(TransactionContext)

    let totalCounter = transactions.reduce((accum, tr) => {
        return accum + +tr.cost
    }, 0)

    return (
        <div className="home-page-wrapper">
            <img src={MainImg} alt="" />
            <p className="balance-title">Your balance</p>
            <h2 className="balance-value">{`$ ${totalCounter}`}</h2>
            <Link to={'transactions'}>
                <button className="home-page-link">All transactions</button>
            </Link>
        </div>
    )
}

export default Home