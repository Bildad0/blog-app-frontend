import { useEffect, useState } from 'react';
import { link } from '../../client';

const GET_TOP_BLOGS = `{
  allPosts {
    id
    title
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

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query: GET_TOP_BLOGS })
};


const TopBlogsList = () => {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    fetch(link, options).then((res) => {
      if (res.status == 200) {
        const data = res.body;
        console.log("latest blog:", data);
      }

    }).catch(error => { return error.message });
  }, [recent, setRecent])


  return recent.map((blog) => {
    return <li key={blog.id}>
      <h1>{blog.title}</h1>
      <p>{blog.author.username}</p>
      <h4>{blog.tags.name}</h4>
    </li>
  })
}

export default TopBlogsList;