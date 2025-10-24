import Logo from "../Logo"
import Navigation from "../Navigation"
import MobileNavigation from "../Navigation/MobileNavigation"


const Header = () => {
    
    return (
        <header className="flex justify-evenly items-center md:justify-between mb-6 p-4 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <Logo />    
            <Navigation />            
            <MobileNavigation /> 
        </header>
    )
}

export default Header