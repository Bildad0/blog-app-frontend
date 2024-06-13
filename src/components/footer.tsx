

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <ul className="flex space-x-4 mb-4 md:mb-0">
                    <li><a href="#" className="hover:text-gray-200">About</a></li>
                    <li><a href="#" className="hover:text-gray-200">Contact</a></li>
                    <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
                </ul>
                <div className="flex space-x-4">
                    <a href="#"><i className="fab fa-facebook text-xl hover:text-gray-200"></i></a>
                    <a href="#"><i className="fab fa-twitter text-xl hover:text-gray-200"></i></a>
                    <a href="#"><i className="fab fa-instagram text-xl hover:text-gray-200"></i></a>
                </div>
            </div>
            <div className="container mx-auto px-6 text-center">
                <p>&copy; 2024 My Blog. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer