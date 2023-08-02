import {Component} from 'react'
import Cookies from 'js-cookie'
import {format} from 'date-fns'

import {FiArrowUpCircle, FiArrowDownCircle} from 'react-icons/fi'
import {AiOutlineEdit} from 'react-icons/ai'
import {RiDeleteBinLine} from 'react-icons/ri'

import Navbar from '../Navbar'

import './index.css'

class Transactions extends Component {
  state = {allTransactions: []}

  componentDidMount() {
    this.getAllTransactions()
  }

  getAllTransactions = async () => {
    const url = `https://bursting-gelding-24.hasura.app/api/rest/all-transactions?offset=1&limit=100`
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
    console.log(data)
    this.setState({allTransactions: data.transactions})
  }

  getDebitedTransactions = async () => {
    const url = `https://bursting-gelding-24.hasura.app/api/rest/all-transactions?offset=1&limit=100`
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
    const debited = data.transactions.filter(item => item.type === 'debit')
    this.setState({allTransactions: debited})
  }

  getCreditedTransactions = async () => {
    const url = `https://bursting-gelding-24.hasura.app/api/rest/all-transactions?offset=1&limit=100`
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
    const credited = data.transactions.filter(item => item.type === 'credit')
    this.setState({allTransactions: credited})
  }

  render() {
    const {allTransactions} = this.state
    // console.log(allTransactions)

    return (
      <div className="transaction-cotainer">
        <Navbar />
        <div className="transactions-section">
          <header className="dashboard-header">
            <h1 className="header-heading">Transactions</h1>
            <button type="button" className="add-tansaction-btn">
              + Add Transaction{' '}
            </button>
          </header>
          <ul className="transaction-tabs">
            <button
              className="transaction-tab-btn"
              type="button"
              onClick={this.getAllTransactions}
            >
              <li>All Transactions</li>
            </button>
            <button
              className="transaction-tab-btn"
              type="button"
              onClick={this.getDebitedTransactions}
            >
              <li>Debit</li>
            </button>
            <button
              className="transaction-tab-btn"
              type="button"
              onClick={this.getCreditedTransactions}
            >
              <li>Credit</li>
            </button>
          </ul>

          <div className="transactions-list-container">
            <p style={{height: '2%', backgroundColor: '#e8f5f'}}>{}</p>

            <ul className="transactions-list">
              <li className="transaction-item">
                <p className="typeIcon-name">Transaction Name</p>
                <p className="transaction-category">Category</p>
                <p className="transaction-date">Date</p>
                <p style={{width: '15%'}}>Amount</p>
              </li>
              {allTransactions.length > 0
                ? allTransactions.map(transaction => (
                    <>
                      <li className="transaction-item" key={transaction.id}>
                        <div className="typeIcon-name">
                          <p>
                            {transaction.type === 'credit' ? (
                              <FiArrowUpCircle className="arrow-icon" />
                            ) : (
                              <FiArrowDownCircle className="arrow-icon" />
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
                          <AiOutlineEdit className="edit-icon" />{' '}
                          <RiDeleteBinLine className="delete-icon" />
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
          </div>
        </div>
      </div>
    )
  }
}

export default Transactions
