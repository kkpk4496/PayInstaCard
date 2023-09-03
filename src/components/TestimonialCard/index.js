import './index.css'

const TestimonialsCard = props => {
  const {cardDetails} = props
  const {name, imgUrl, feed} = cardDetails

  return (
    <li className="card-list-item">
      <img src={imgUrl} className="test-card-img" alt={name} />
      <p className="test-card-name">{name}</p>
      <hr className="line-break" />
      <p className="test-card-feed">{feed}</p>
    </li>
  )
}

export default TestimonialsCard
