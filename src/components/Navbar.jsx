import '../styles/style.css'

function Navbar() {
    return (
        <div className="nav-container">
            <p className='nav-left'>Drewler</p>
            <div className="nav-right">
                <p>About</p>
                <p>Passions</p>
                <p>Portfolio</p>
                <p className='contact'>Contact Me</p>
            </div>
        </div>
    )
}

export default Navbar