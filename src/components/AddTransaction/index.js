import Popup from 'reactjs-popup'
import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiOutlineClose} from 'react-icons/ai'

import 'reactjs-popup/dist/index.css'

import './index.css'

class AddTransaction extends Component {
  state = {transactionname: '', type: '', category: '', amount: '', date: ''}

  setName = event => {
    this.setState({transactionname: event.target.value})
  }

  setType = event => {
    this.setState({type: event.target.value})
  }

  setCategory = event => {
    this.setState({category: event.target.value})
  }

  setAmount = event => {
    this.setState({amount: event.target.value})
  }

  setDate = event => {
    this.setState({date: event.target.value})
  }

  onAddTransaction = async event => {
    event.preventDefault()
    const {transactionname, type, category, amount, date} = this.state
    const userId = Cookies.get('jwt_token')
    const addingDetails = {
      name: transactionname,
      type,
      category,
      amount,
      date,
      user_id: userId,
    }
    const url =
      'https://bursting-gelding-24.hasura.app/api/rest/add-transaction'

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
        'x-hasura-role': 'user',
        'x-hasura-user-id': userId,
      },
      body: JSON.stringify(addingDetails),
    }

    const response = await fetch(url, options)
    console.log(response)
  }

  render() {
    const {transactionname, type, category, amount, date} = this.state

    return (
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button type="button" className="add-tansaction-btn trigger-button">
              + Add Transaction{' '}
            </button>
          }
        >
          {close => (
            <form
              className="add-transaction-form"
              onSubmit={this.onAddTransaction}
            >
              <div className="form-head">
                <h1>Add Transaction</h1>
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => close()}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
              <br />

              <label className="custom-label" htmlFor="transn-name">
                Transaction Name
              </label>
              <input
                type="text"
                className="custom-input"
                value={transactionname}
                id="trans-name"
                onChange={this.setName}
                placeholder="Enter Name"
              />
              <br />

              <label className="custom-label" htmlFor="transn-name">
                Transaction Type
              </label>
              <select
                type="text"
                className="custom-input"
                id="trans-name"
                value={type}
                onChange={this.setType}
              >
                <option value="" disabled selected>
                  Select Transaction Type
                </option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>
              <br />

              <label className="custom-label" htmlFor="transn-name">
                Category
              </label>
              <select
                type="text"
                className="custom-input"
                id="trans-name"
                value={category}
                onChange={this.setCategory}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="shopping">Shopping</option>
                <option value="bill payment">Bill Payment</option>
                <option value="emi">EMI</option>
                <option value="donate">Donation</option>
              </select>
              <br />

              <label className="custom-label" htmlFor="transn-name">
                Amount
              </label>
              <input
                type="text"
                className="custom-input"
                value={amount}
                id="trans-name"
                onChange={this.setAmount}
              />
              <br />

              <label
                className="custom-label"
                htmlFor="transn-name"
                onChange={this.setDate}
              >
                Date
              </label>
              <input
                type="date"
                className="custom-input"
                value={date}
                id="trans-name"
              />
              <br />

              <button type="submit" className="add-to-transactions">
                Add Transaction
              </button>
            </form>
          )}
        </Popup>
      </div>
    )
  }
}

export default AddTransaction
