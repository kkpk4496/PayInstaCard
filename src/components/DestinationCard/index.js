import './index.css'

const DestinationCard = props => {
  const {cardDetails} = props
  const {name, address, imgUrl} = cardDetails

  return (
    <li className="destinations-card-cont">
      <img src={imgUrl} alt={name} className="destination-card-img" />
      <h1 className="destinations-card-head">{name}</h1>
      <div className="three-dots-cont">
        <p className="destinations-card-info">{address}</p>
        <div className="three-dots">
          <p>...</p>
        </div>
      </div>
    </li>
  )
}

export default DestinationCard
