
import { useQuery } from '@apollo/client';
import { GET_ALL_BLOGS } from '../../queries';


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
        <a href={`/blog/${post.id}`} className="mt-4 inline-block text-blue-600 hover:underline">Read More</a>
      </div>
    </div>
  ))
}

export default DisplayBlogs