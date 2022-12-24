import { Link } from "react-router-dom"

const Transaction = ({...tr}) => {

    const {title, cost , index, date} = tr

    return(
        <div className="transaction-wrapper">
            <Link to={index.toString()}>
                <div className="transaction-info">
                    <h2>{title}</h2>
                    <p className="transaction-date">{date}</p>

                </div>
                <div className="transaction-sum">
                    <p>{`${cost} $`}</p>
                </div>
            </Link>
        </div>
    )
}

export default Transaction