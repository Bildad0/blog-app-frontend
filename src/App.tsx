import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import PostDetail from './components/blog/blog'
import HomePage from './home';
import AboutPage from './about';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Register from './components/signup';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/login" Component={Login} />
        <Route path="register" Component={Register} />
        <Route path="/blog/:id" Component={PostDetail} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App