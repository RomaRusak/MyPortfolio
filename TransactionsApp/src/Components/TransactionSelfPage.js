import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useContext, useRef, useState } from "react"
import { TransactionContext } from "../App"
import TransactionsArrBack from './images/transactionsarrback.svg'

const TransactionSelfPage = () => {

    const titleRef = useRef()
    const costRef = useRef()
    const dataRef = useRef()

    const changeButton = useRef()

    const {id} = useParams()
    
    const {transactions, removeTransactionHandler, setTransactions} = useContext(TransactionContext)
    
    const [selfPage] = transactions.filter((tr, index) => {
        return index == id
    });

    const removeThisTr = () => {
        removeTransactionHandler(id)
    }

    const change = () => {
        titleRef.current.contentEditable = true
        costRef.current.contentEditable = true
        dataRef.current.contentEditable = true
        setContentChange(true)
    }

    const changeStop = () => {
        titleRef.current.contentEditable = false
        costRef.current.contentEditable = false
        dataRef.current.contentEditable = false
        setContentChange(false)
        
       let newTransactions = transactions.map((tr, index) => {
            if (index == id) {
                tr = {
                    title: titleRef.current.innerText,
                    cost: costRef.current.innerText,
                    date: dataRef.current.innerText 
                }
            }
            return tr
        })
        setTransactions(newTransactions)
    }

    let [contentChange, setContentChange] = useState(false)

    let {title, cost, date} = selfPage

    return (
        <>
        <div className="self-page">
            <p className="selfpage-date" ref={dataRef}>{date}</p>
            <p className="selfpage-title" ref={titleRef}>{title}</p>
            <p ref={costRef}>{cost}</p>
            <div className="selfpage-buttons-wrapper">
                <button onClick={change} ref={changeButton}>edit</button>
                <Link to={'/transactions'}>
                <button onClick={removeThisTr}>remove</button>
                </Link>
                {contentChange  && <button onClick={changeStop}>save</button>}
                <Link to={'/transactions'}>
                    <img className="selpgae-link-back" src={TransactionsArrBack} alt="" />
                </Link>
            </div>
        </div>
        </>
    )
}

export default TransactionSelfPage