import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import PostDetail from './components/blog/blog'
import HomePage from './home';
import AboutPage from './about';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Error from './components/error';
import Register from './components/signup';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import Profile from './components/profile';


function App() {
const [user, setUser] = useState(null)

  return (
    <div>
      <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route index  path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path='/profile' element={<Profile user={user}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog/:id" element={<PostDetail />} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </Router>
    </div>

  )

}

export default App