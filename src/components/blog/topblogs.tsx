import { gql, useQuery } from '@apollo/client';
import { formatedDate } from '../../constants';

const GET_TOP_BLOGS = gql`
  query {
    allPosts {
      id
      title
      publishDate
      author {
        user {
          username
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
    return <li key={blog.id} className='list-none m-2 bg-white rounded-md'>
      <h1 className='rounded-md p-2'>{blog.title}</h1>
      <p className='text-blue-900 m-2 text-xl font-bold '>{blog.author.user.username}</p>
      <h1 className='text-green-900 bg-white'>{formatedDate(blog.publishDate)}</h1>
      <ul className='flex flex-row gap-3 bg-gray-100 p-2'>{...blog.tags.map((tag) => {
        return (
          <li>
            <a href={`/categories/id=${tag.id}`} className='text-lg hover:underline'>{tag.name}</a>
          </li>
        )
      })}
      </ul>
    </li>
  })
}

export default TopBlogsList;