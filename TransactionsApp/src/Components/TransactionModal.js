import { useContext , useState, useRef} from "react"
import { TransactionContext } from "../App"
import { Link } from "react-router-dom"

const TransactionModal = () => {

    const {addTransactionHandler} = useContext(TransactionContext)
    const [operartionTitle, setOperartionTitle] = useState('')
    const [operationSum, setOperationSum] = useState('')
    const [operationDate, setOperationDate] = useState('')

    const errorRef = useRef()

    const operationTitleHandler = (e) => {
        setOperartionTitle(e.target.value)
    }

    const operationSumHandler = (e) => {
        let eventVal = e.target.value
        for (let i = 0; i < eventVal.length; i++) {
            if (['1','2','3','4','5','6','7','8','9','.','-','0'].indexOf(eventVal[i]) == -1 ) return 
        }

        setOperationSum(e.target.value)
    }

    const operationDateHandler = (e) => {
        setOperationDate(e.target.value)
    }

    const addTransaction = (e) => {
        e.preventDefault()
        errorRef.current.innerHTML = ''

        if (operartionTitle == '' || operationSum == '') {
            errorRef.current.innerHTML = 'поля "наименование" и "сумма" не могут быть пустыми'
            return
        }
        addTransactionHandler({title: operartionTitle, cost: operationSum, date: operationDate})
        setOperartionTitle('')
        setOperationSum('')
        setOperationDate('')
    }

    return (
        <div className="transaction-modal">
            <div className="close-modal">
                <Link to={'/transactions'}>X</Link>
            </div>
            <form onSubmit={addTransaction}>
                <input type="text" placeholder="наименование операции" onChange={operationTitleHandler} value={operartionTitle}/>
                <input type="text" placeholder="сумма" onChange={operationSumHandler} value={operationSum}/>
                <input type="date" onChange={operationDateHandler} value={operationDate}/>
                {<p ref={errorRef}></p>}
                <button type="submit">add</button>
            </form>
        </div>
    )
} 

export default TransactionModal