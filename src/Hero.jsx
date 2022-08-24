import gridImages from "./assets/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={gridImages} alt="Grid of photos" className="photo-grid"/>
            <div className="text-content">
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-text">Join unique interactive activities led by one-of-a-kind-all withput leaving home.</p>
            </div>  
        </section>
    )
}