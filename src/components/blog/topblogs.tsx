import { gql, useQuery } from '@apollo/client';

const GET_TOP_BLOGS = gql`
  query {
    allPosts {
      id
      title
      author {
        user {
          username
          lastLogin
        }
      }
      tags {
        name
      }
    }
  }
`;


function TopBlogsList() {
  const { loading, error, data } = useQuery(GET_TOP_BLOGS);
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return data.allPosts.map((blog) => {
    return <li key={blog.id} className='list-none m-2'>
      <h1 className='bg-white rounded-md p-2 '>{blog.title}</h1>
      <p className='text-blue-900 m-2 text-xl font-bold '>{blog.author.user.username}</p>
      <h1 className=''>{blog.author.user.lastLogin}</h1>
      <div className='flex flex-row gap-3'>{...blog.tags.map((tag)=>{
        return(<h4 className='text-lg'>{tag.name}</h4>)
      })}
      </div>
    </li>
  })
}

export default TopBlogsList;