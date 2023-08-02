import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import {HiHome} from 'react-icons/hi'
import {FaUser} from 'react-icons/fa'
import {FcMoneyTransfer as FaMoneyBillTransfer} from 'react-icons/fc'
import {MdLogout as LuLogOut} from 'react-icons/md'

import './index.css'

class Navbar extends Component {
  state = {profileDetails: ''}

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
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
    // console.log(data)
    this.setState({profileDetails: data.users[0]})
  }

  render() {
    const {profileDetails} = this.state
    // console.log(profileDetails)

    return (
      <nav className="left-nav-bar">
        <div>
          <img
            src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1690644580/BankApp/Logo_xfgvg8.png"
            alt="website logo"
            className="website-logo"
          />
          <ul className="nav-options-list">
            <Link to="/dashboard" className="Link-el">
              <li className="nav-item">
                <HiHome className="nav-icon" />
                Dashboard
              </li>
            </Link>

            <Link to="/transactions" className="Link-el">
              <li className="nav-item">
                <FaMoneyBillTransfer className="nav-icon" />
                Transaction
              </li>
            </Link>

            <Link to="/profile" className="Link-el">
              <li className="nav-item">
                <FaUser className="nav-icon" />
                Profile
              </li>
            </Link>
          </ul>
        </div>

        <div className="nav-profile">
          <img
            className="profile-icon"
            src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1690800579/BankApp/Avatar_b3d4gj.png"
            alt="profile icon"
          />
          <div className="name-email">
            <p className="">{profileDetails.name}</p>
            <p>{profileDetails.email}</p>
          </div>
          <LuLogOut className="logout-icon" />
        </div>
      </nav>
    )
  }
}

export default Navbar
