import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import PostDetail from './components/blog/blog'
import HomePage from './home';
import AboutPage from './about';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Register from './components/signup';
import { gql, useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {

  const GET_ME = gql`
  mutation TokenAuth($token: String) {
    verifyToken(token: $token) {
      payload
    }
  }
  `;
  const [verifyToken] = useMutation(GET_ME);


  async function Verify() {
    const navigate = useNavigate();

    await verifyToken({
      variables: {
        token: localStorage.getItem("token")?.toString
      }
    }).then((data) => {
      localStorage.setItem('tokenExpiry', data.data.exp);
      navigate("/");
    }).catch((error) => {
      console.log(error.message);
      navigate("/login");
    })


  }

  useEffect(() => {
    Verify()
  })


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/blog/:id" Component={PostDetail} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App