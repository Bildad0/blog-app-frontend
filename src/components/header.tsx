import Logo from '../assets/png/logo-no-background.png'

function Header() {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-gray-700"><img src={Logo} alt='Logo' loading='lazy' width={250}/></div>
                    <nav className="flex space-x-4">
                        <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header