import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from './components/aside';
import DisplayBlogs from './components/blog/all_blogs';
import { VERIFY_TOKEN } from './mutations';


const userToken = localStorage.getItem("token");

const HomePage = () => {
  const [verifyToken] = useMutation(VERIFY_TOKEN);
  const navigate = useNavigate();

  // useEffect(() => {
  //   verifyToken({ variables: { token: userToken } }).then((res) => {
  //     console.log("token verified: ", res.data.payload);

  //   }).catch((err) => {
  //     if (!userToken && err) {
  //       navigate("/login")
  //     } if (err)
  //       navigate("/register")
  //   });

  // }, [verifyToken, navigate])
  return (
    <div className='bg-gray-100 flex-row  items-center justify-center min-h-screen sr-only sm:not-sr-only'>
      {/* hero section */}
      <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
          <p className="mt-4 text-lg">Stay updated with the latest posts</p>
        </div>
      </section>
      <div className='flex flex-row'>
        <Aside />
        <div className='m-4 p-6 '>
          <section className="container mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold text-gray-800">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <DisplayBlogs />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default HomePage