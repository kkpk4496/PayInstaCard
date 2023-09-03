import './index.css'

import ExploreCard from '../ExploreCard'

const exploreCardImgs = [
  {
    imgUrl: 'https://i.ibb.co/Y75RXVd/Group-167.png',
    name: 'Jenny Wilson',
    info: 'hjkooo',
  },
  {
    name: 'Jenny Wilson',
    imgUrl: 'https://thumbs2.imgbox.com/ab/12/wAzY19NC_t.png',
    info: 'uibiubin oijkmlkmm',
  },
  {
    name: 'Jenny Wilson',
    imgUrl: 'https://thumbs2.imgbox.com/7d/4e/1vuUZGEu_t.png',
    info: 'uguihoin uihonl mk nncfyggb',
  },
]

const Explore = () => (
  <div className="explore-cont">
    <ul className="explore-div-1-cont">
      {exploreCardImgs.map(eachCard => (
        <ExploreCard key={eachCard.name} cardDetails={eachCard} />
      ))}
    </ul>
    <div className="explore-div-2-cont">
      <h1 className="explore-div-2-head">
        Tropical Adventure <br />
        <span className="explore-div-2-head-span">for Students.</span>
      </h1>
      <p className="explore-div-2-info">
        Student Tropical Vacation: Relax and Recharge
      </p>
      <ul className="explore-menu-list">
        <li className="explore-menu-list-item">gujkookk okoklpl</li>
        <li className="explore-menu-list-item">hjku loiuerf jnui,kl</li>
        <li className="explore-menu-list-item">himnfg ombesrh ,mnhkjk</li>
        <li className="explore-menu-list-item">hjdry mlkop edvh hbhjj</li>
      </ul>
      <button type="button" className="explore-btn">
        Explore More
      </button>
    </div>
  </div>
)

export default Explore
