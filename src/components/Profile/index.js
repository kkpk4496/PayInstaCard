import {Component} from 'react'
import Cookies from 'js-cookie'

import Navbar from '../Navbar'

import './index.css'

export default class Profile extends Component {
  state = {profileInfo: ''}

  componentDidMount() {
    this.getProfileInfo()
  }

  getProfileInfo = async () => {
    const url = 'https://bursting-gelding-24.hasura.app/api/rest/profile'
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
    this.setState({profileInfo: data.users[0]})
  }

  render() {
    const {profileInfo} = this.state

    return (
      <div className="profile-container">
        <Navbar />
        <div className="profile-details">
          <header className="dashboard-header">
            <h1 className="header-heading">Profile</h1>
            <button type="button" className="add-tansaction-btn">
              + Add Transaction{' '}
            </button>
          </header>
          <div className="user">
            <div className="profile">
              <img
                src="https://pixabay.com/get/gc7a86544b167d5918e25add19c31066eb15ffb24fe84afad78e805ac0177161e60266acee5019915ba603c98c837090b9cfc826c87dc6bca21afaca7caabd2d217b96f9a63dac7ec495a8a2012ee45da_640.png"
                alt="avatar"
                className="avatar-img"
              />
              <div className="details-col-1">
                <label className="custom-label" htmlFor="custom-input">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  value={profileInfo.name}
                  className="custom-input"
                  id="custom-input"
                />
                <br />
                <br />
                <label className="custom-label" htmlFor="custom-input">
                  Email
                </label>
                <br />
                <input
                  type="text"
                  value={profileInfo.email}
                  className="custom-input"
                  id="custom-input"
                />
                <br />
                <br />

                <label className="custom-label" htmlFor="date-el">
                  Date of Birth
                </label>
                <br />
                <input
                  className="custom-input"
                  value={profileInfo.date_of_birth}
                  type="date"
                  id="date-el"
                />
                <br />
                <br />

                <label className="custom-label" htmlFor="custom-input">
                  Permanent Address
                </label>
                <br />
                <input
                  type="text"
                  value={profileInfo.permanent_address}
                  className="custom-input"
                  id="custom-input"
                />
                <br />
                <br />
                <label className="custom-label" htmlFor="custom-input">
                  Postal Code
                </label>
                <br />
                <input
                  type="text"
                  value={profileInfo.postal_code}
                  className="custom-input"
                  id="custom-input"
                />
                <br />
                <br />
              </div>

              <div className="details-col-2">
                <label className="custom-label" htmlFor="custom-input">
                  Username
                </label>
                <br />
                <input
                  type="text"
                  value={profileInfo.username}
                  className="custom-input"
                  id="custom-input"
                />
                <br />
                <br />
                <label className="custom-label" htmlFor="custom-input">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  value={profileInfo.password}
                  className="custom-input"
                  id="custom-input"
                />
                <br />
                <br />

                <label className="custom-label" htmlFor="date-el">
                  Present Address
                </label>
                <br />
                <input
                  className="custom-input"
                  value={profileInfo.present_address}
                  type="text"
                  id="date-el"
                />
                <br />
                <br />

                <label className="custom-label" htmlFor="custom-input">
                  City
                </label>
                <br />
                <input
                  type="text"
                  value={profileInfo.city}
                  className="custom-input"
                  id="custom-input"
                />
                <br />
                <br />
                <label className="custom-label" htmlFor="custom-input">
                  Country
                </label>
                <br />
                <input
                  type="text"
                  value={profileInfo.country}
                  className="custom-input"
                  id="custom-input"
                />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
