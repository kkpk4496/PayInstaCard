import {Component} from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const ApiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class LoginForm extends Component {
  state = {
    email: '',
    showError: false,
    errMsg: '',
    password: '',
    apiStatus: ApiStatusConstants.initial,
  }

  setEmail = event => {
    this.setState({email: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccessSubmit = data => {
    const {history} = this.props

    Cookies.set('jwt_token', data.get_user_id[0].id, {
      expires: 30,
    })
    history.push('/dashboard')
    this.setState({apiStatus: ApiStatusConstants.success})
  }

  onFailure = () => {
    console.log('fetching error occured')
    this.setState({
      showError: true,
      errMsg: 'Please enter the correct credentials',
      apiStatus: ApiStatusConstants.failure,
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {email, password} = this.state
    const url = `https://bursting-gelding-24.hasura.app/api/rest/get-user-id?email=${email}&password=${password}`
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (data.get_user_id.length > 0 && response.ok === true) {
      this.onSuccessSubmit(data)
    } else {
      this.onFailure()
    }
  }

  render() {
    const {apiStatus, email, password, showError, errMsg} = this.state
    console.log(apiStatus)
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/dashboard" />
    }

    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <img
            className="login-logo"
            src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1690644580/BankApp/Logo_xfgvg8.png"
            alt="login logo"
          />
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              className="input-el"
              type="email"
              id="email"
              value={email}
              onChange={this.setEmail}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              className="input-el"
              type="password"
              value={password}
              onChange={this.setPassword}
              required
              id="password"
            />
          </div>
          {showError ? <p className="error-msg">*{errMsg}</p> : null}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)
