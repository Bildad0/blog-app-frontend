import { useQuery, gql } from '@apollo/client';
import TopBlogs from './components/blog/topblogs';

const GET_ALL_BLOGS = gql`
query {
  allPosts {
    id
    title
    subtitle
    imageUrl
    metaDescription
    dateCreated
    dateModified
    publishDate
    published
  }
}
`;

function DisplayBlogs() {
  const { loading, error, data } = useQuery(GET_ALL_BLOGS);
  if (loading) return <p className='text-blue text-3xl'>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>
  return data.allPosts.map((post) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" key={post.id}>
      <img src={post.imageUrl} alt="Post Image" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-bold">{post.title}</h3>
        <p className="mt-2 text-gray-600">{post.subtitle}</p>
        <a href={`/post/${post.id}`} className="mt-4 inline-block text-blue-600 hover:underline">Read More</a>
      </div>
    </div>
  ))
}


const HomePage = () => {
  return (
    <div className='bg-gray-100 flex-row  items-center justify-center min-h-screen'>

      {/* hero section */}
      <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
          <p className="mt-4 text-lg">Stay updated with the latest posts</p>
        </div>
      </section>


      <div className='flex flex-row'>
        <div className='border-r-4 border-gray-200 m-4 p-6 '>
          <section className="container mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold text-gray-800">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {/* Post Card */}
              <DisplayBlogs />
            </div>
          </section>
        </div>
        <div className='flex flex-col bg-gray-200'>
          <h1>Top Stories</h1>
          <div> <ul><TopBlogs /></ul></div>
        </div>
      </div>

    </div>
  )
}

export default HomePage