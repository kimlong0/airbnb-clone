import airbnbLogo from './assets/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={airbnbLogo} alt="AirBnB logo" className='airbnb-logo'/>
        </nav>
    )
}