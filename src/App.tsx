import './App.css'
import { useQuery, gql } from '@apollo/client';

const GET_ALL_BLOGS = gql`
query {
  allPosts {
    id
    title
    subtitle
    body
    metaDescription
    dateCreated
    dateModified
    publishDate
    published
    slug
  }
}
`;


function DisplayBlogs() {
  const { loading, error, data } = useQuery(GET_ALL_BLOGS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>
  return data.allPosts.map((post) => (
    <div key={post.id}><h1>{post.title}</h1> <h4>{post.subtitle}</h4> <p>{post.body}</p></div>
  ))
}

function App() {
  return (
    <>
      <h1>List of blogs available</h1>
      {<DisplayBlogs />}
    </>
  )
}

export default App
