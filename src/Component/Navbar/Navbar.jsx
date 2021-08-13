import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
               <div className="navbarLogo">
                   <img src="https://sfoly.com/Assets/logo.svg" alt="" />
                   <div className="navbarLogoName">
                        <h3 className="navbarLight">springfield</h3>
                        <h3 className="navbarBold">Olympiads</h3>
                   </div>
               </div>
               <div className="navbarDetails">
                   <ul>
                       <li>Olympiads</li>
                       <li>About us</li>
                       <li>FAQ's</li>
                       <li>Contact us</li>
                   </ul>
                   <button>Institue Login</button>
               </div>
            </div>            
        </div>
    )
}
