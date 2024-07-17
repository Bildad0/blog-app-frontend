import { useQuery } from '@apollo/client';
import { formatedDate } from '../../constants';
import { GET_TOP_BLOGS } from '../../queries';




function TopBlogsList() {
  console.log("query: ", GET_TOP_BLOGS)
  const { loading, error, data } = useQuery(GET_TOP_BLOGS);
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  console.error("Error: ", error);
  console.log("data: ", data.allPosts);

  return data.allPosts.map((blog) => {
    return <ul role="list" key={blog.id}>
      <li className="group/item hover:bg-slate-100 rounded-md min-h-content ">
        <div>
          <a href={`/blog/${blog.id}`} className=''>{blog.title}</a>
          <p className='font-bold text-xl'>{blog.author.user.username}</p>
          <p>{formatedDate(blog.publishDate)}</p>
        </div>
        <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible rounded-full m-4 " href={`/blog/${blog.id}`}>
          <span className="group-hover/edit:text-gray-700 p-4 ">read</span>
        </a>
      </li>
    </ul>
  })
}

export default TopBlogsList;
