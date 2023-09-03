import './index.css'

import TestimonialsCard from '../TestimonialCard'

const cards = [
  {
    name: 'Corey Korsgard',
    feed:
      'It is a bknl fybkh inbgdf koklpgtfg eevcbjhij hijknbhv tfybihhi vguhijh',
    imgUrl: 'https://i.ibb.co/jw73KrT/Rectangle-16.png',
  },
  {
    name: 'Jakob Aminoff',
    feed:
      'It is a guhnpm guyddytvb nonoihuig boijpimoih iojknoknoij yguiho inoijp',
    imgUrl: 'https://i.ibb.co/3yTjZ2h/Rectangle-17.png',
  },
  {
    name: 'Carla Press',
    feed:
      'It is a buh tytyfuh uihiuh esrtrghooji uhjoijj tfdytfg ujoijhj tr6tfguoiik',
    imgUrl: 'https://i.ibb.co/wswmxSk/Rectangle-19.png',
  },
]

const Testimonials = () => (
  <div className="testimonials-cont">
    <h1 className="testimonials-head">Testimonials</h1>
    <ul className="testimonials-cards-cont">
      {cards.map(eachCard => (
        <TestimonialsCard key={eachCard.name} cardDetails={eachCard} />
      ))}
    </ul>
  </div>
)

export default Testimonials
