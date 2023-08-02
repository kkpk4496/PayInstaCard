import {Component} from 'react'
import {FiArrowUpCircle, FiArrowDownCircle} from 'react-icons/fi'
import {AiOutlineEdit} from 'react-icons/ai'
import {RiDeleteBinLine} from 'react-icons/ri'
import Cookies from 'js-cookie'
import {format} from 'date-fns'
import Trend from '../Trend'
import AddPopUp from '../AddTransaction'

import Navbar from '../Navbar'

import './index.css'

class Dashboard extends Component {
  state = {
    creditDebitTotal: [],
    last3Transactions: [],
    last7daysTransactions: [],
  }

  componentDidMount() {
    this.getCreditDebitTotal()
    this.getLast3transactions()
    this.getLast7daystransactions()
  }

  getCreditDebitTotal = async () => {
    const url =
      'https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals'
    const userId = Cookies.get('jwt_token')
    const options = {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
        'x-hasura-role': 'user',
        'x-hasura-user-id': userId,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    this.setState({creditDebitTotal: data.totals_credit_debit_transactions})
  }

  getLast3transactions = async () => {
    const url = `https://bursting-gelding-24.hasura.app/api/rest/all-transactions?offset=1&limit=3`
    const userId = Cookies.get('jwt_token')
    const options = {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
        'x-hasura-role': 'user',
        'x-hasura-user-id': userId,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({last3Transactions: data.transactions})
  }

  getLast7daystransactions = async () => {
    const url = `https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days`
    const userId = Cookies.get('jwt_token')
    const options = {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
        'x-hasura-role': 'user',
        'x-hasura-user-id': userId,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({
      last7daysTransactions: data.last_7_days_transactions_credit_debit_totals,
    })
  }

  render() {
    const {
      creditDebitTotal,
      last3Transactions,
      last7daysTransactions,
    } = this.state
    const creditedTotal =
      creditDebitTotal.length > 0
        ? creditDebitTotal.filter(item => item.type === 'credit')
        : null
    const debitedTotal =
      creditDebitTotal.length > 0
        ? creditDebitTotal.filter(item => item.type === 'debit')
        : null
    const last7days =
      last7daysTransactions.length > 0
        ? last7daysTransactions.slice(1, 8)
        : null

    return (
      <div className="dashbord-container">
        <Navbar />
        <div className="dashboard">
          <header className="dashboard-header">
            <h1 className="header-heading">Account</h1>
            <AddPopUp />
          </header>

          <div className="dashboard-content">
            <div className="total-credit-debit-conatainer">
              <div className="total-credited">
                <p>
                  {' '}
                  <span className="creditedAmount">
                    ${creditedTotal !== null ? creditedTotal[0].sum : null}
                  </span>{' '}
                  <br /> <span className="span-el">Credit</span>{' '}
                </p>
                <img
                  src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1690681821/BankApp/Group_g777tu.png"
                  alt="total credited"
                />
              </div>
              <div className="total-debited">
                <p>
                  <span className="deditedAmount">
                    {' '}
                    ${debitedTotal !== null ? debitedTotal[0].sum : null}
                  </span>{' '}
                  <br /> <span className="span-el">Dedit</span>{' '}
                </p>
                <img
                  src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1690681820/BankApp/Group_1_yf9pde.png"
                  alt="total debited"
                />
              </div>
            </div>
            <br />

            <h1>Last Transaction</h1>
            <br />

            <ul className="last-3-transactions-list">
              {last3Transactions.length > 0
                ? last3Transactions.map(transaction => (
                    <>
                      <li className="transaction-item" key={transaction.id}>
                        <div className="typeIcon-name">
                          <p>
                            {transaction.type === 'credit' ? (
                              <FiArrowUpCircle className="up-arrow-icon" />
                            ) : (
                              <FiArrowDownCircle className="down-arrow-icon" />
                            )}
                          </p>
                          {'     '}
                          <p style={{color: '#505887'}}>
                            {transaction.transaction_name[0].toUpperCase() +
                              transaction.transaction_name.slice(1)}
                          </p>
                        </div>

                        <p
                          style={{color: '#718EBF'}}
                          className="transaction-category"
                        >
                          {transaction.category}
                        </p>
                        <p
                          style={{color: '#718EBF'}}
                          className="transaction-date"
                        >
                          {format(new Date(transaction.date), 'dd MMM, h.mm a')}
                        </p>
                        <p
                          className={
                            transaction.type === 'credit'
                              ? 'credited'
                              : 'debited'
                          }
                        >
                          {transaction.type === 'credit' ? '+' : '-'}
                          {transaction.amount}
                        </p>
                        <p
                          style={{
                            width: '5%',
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <button type="button">
                            <AiOutlineEdit className="edit-icon" />
                          </button>
                          <button type="button">
                            <RiDeleteBinLine className="delete-icon" />
                          </button>
                        </p>
                      </li>
                      <p>
                        <hr className="hr-el" />
                      </p>
                    </>
                  ))
                : null}
            </ul>
            <br />

            <h1>Debit & Credit Overview</h1>
            <br />

            <div className="overview-container">
              {last7daysTransactions.length > 0 ? (
                <Trend data={last7days} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Dashboard
