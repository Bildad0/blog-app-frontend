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
    return <li key={blog.id}>
      <h1>{blog.title}</h1>
      <p>{blog.author.user.username}</p>
      <h1>{blog.author.user.lastLogin}</h1>
      <h4>{blog.tags.name}</h4>
    </li>
  })
}

export default TopBlogsList;