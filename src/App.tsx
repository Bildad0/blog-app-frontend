import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import PostDetail from './components/blog/blog'
import HomePage from './home';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/post/:id" Component={PostDetail} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App


