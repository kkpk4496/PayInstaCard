import './index.css'

import DestinationsCard from '../DestinationCard'

const DestinationsCards = [
  {
    name: 'Harvard University',
    address: 'Cambridge, massachusetts, UK',
    imgUrl: 'https://thumbs2.imgbox.com/87/df/WYe54BpC_t.png',
  },
  {
    name: 'Oxford University',
    address: 'Oxford, England',
    imgUrl: 'https://thumbs2.imgbox.com/8c/ff/TbeHYyN3_t.png',
  },
  {
    name: 'Stanford University',
    address: 'Stanford, California',
    imgUrl: 'https://thumbs2.imgbox.com/00/24/EaekFwXa_t.png',
  },
  {
    name: 'Nanyang Technology',
    address: 'Nanyang Ave, Singapore',
    imgUrl: 'https://thumbs2.imgbox.com/42/31/F8e1M0Ky_t.png',
  },
]

const Destination = () => (
  <div className="destinations-cont">
    <h1 className="destinations-head">Our Destinations</h1>
    <ul className="destinations-cards-cont">
      {DestinationsCards.map(eachCard => (
        <DestinationsCard key={eachCard.name} cardDetails={eachCard} />
      ))}
    </ul>
  </div>
)

export default Destination
