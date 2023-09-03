import './index.css'

const BookNow = () => (
  <div className="book-now-cont">
    <div className="book-now-img-cont">
      <img
        src="https://i.ibb.co/Y75RXVd/Group-167.png"
        alt="img 71"
        className="book-now-img"
      />
    </div>
    <div className="book-now-form-cont">
      <form className="book-now-form">
        <h1 className="book-now-form-head">Book now</h1>
        <p className="book-now-form-info">
          Ijtuil bunkjk bvtryiuh jhjbjh vhgbjk bhgdxerd
        </p>
        <p className="label">CITY</p>
        <input placeholder="Placeholder" type="text" className="city-input" />
        <div className="form-cont">
          <div className="data-cont">
            <p className="label">ARRIVAL</p>
            <input
              placeholder="10 October"
              type="calender"
              className="input-2"
            />
          </div>
          <div className="data-cont">
            <p className="label">DEPARTURE</p>
            <input
              placeholder="11 October"
              type="calender"
              className="input-2"
            />
          </div>
        </div>
        <div className="form-cont-2">
          <div className="num-cont">
            <p className="label">STAR</p>
            <div className="range-container">
              <div className="minus">
                <p>-</p>
              </div>
              <div className="num">
                <p>4</p>
              </div>
              <div className="plus">
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="num-cont">
            <p className="label">ROOM</p>
            <div className="range-container">
              <div className="minus">
                <p>-</p>
              </div>
              <div className="num">
                <p>1</p>
              </div>
              <div className="plus">
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="form-btn">
          BOOK NOW
        </button>
      </form>
    </div>
  </div>
)

export default BookNow
