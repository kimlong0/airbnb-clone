import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import Card from "./Card.jsx"
import data from "./data.js"

export default function App() {
  const cardElements = data.map(item => {
    return <Card
      key={item.id}
      item={item}
    />
  })

  return (
    <div className="App">
        <Navbar />
        <Hero />
        <section className="cards-list">
          {cardElements}
        </section>
    </div>
  )
}
