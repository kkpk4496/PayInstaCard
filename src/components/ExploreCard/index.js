import './index.css'

const ExploreCard = props => {
  const {cardDetails} = props
  const {name, imgUrl, info} = cardDetails
  return (
    <li className="explore-card-cont">
      <div className="explore-card-img-cont">
        <img src={imgUrl} className="explore-card-img" alt={name} />
      </div>
      <div className="explore-card-info-cont">
        <h1 className="explore-card-info-head">{name}</h1>
        <p className="explore-card-info">{info}</p>
      </div>
    </li>
  )
}

export default ExploreCard
