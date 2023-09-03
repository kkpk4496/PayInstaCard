import './index.css'

const Header = () => (
  <div className="header-cont">
    <div className="links-cont">
      <p className="header-info">Home</p>
      <p className="header-info">About</p>
      <p className="header-info">Schedules</p>
      <p className="header-info">Membership</p>
      <p className="header-info">Pricing</p>
    </div>
    <div className="header-btn-cont">
      <button type="button" className="header-btn-1">
        Offers
      </button>
      <button type="button" className="header-btn-2">
        Courses
      </button>
    </div>
  </div>
)

export default Header
