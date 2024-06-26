import Logo from '../assets/png/logo-no-background.png'

function Header() {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-gray-700"><img src={Logo} alt='Logo' loading='lazy' width={250}/></div>
                    <form className='flex flex-row gap-3 w-[40%]'>
                    <input type="text" placeholder="Search..." className="px-4 py-2 rounded border-none bg-gray-200 w-[50%]"  />
                    <button className='bt bt-secondary'>Search</button>
                    </form>
                    
                    <nav className="flex space-x-4">
                        <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                        <a href="/categories" className="hover:text-gray-200">Categories</a>
                        <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
                        <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
                        <a href="/login">Log In</a>
                        <a href="/register">Register</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header