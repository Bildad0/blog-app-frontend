import { useQuery } from '@apollo/client';
import { formatedDate } from '../../constants';
import { GET_TOP_BLOGS } from '../../queries';




function TopBlogsList() {
  const { loading, error, data } = useQuery(GET_TOP_BLOGS);
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return <ul role="list">
    {data.allPosts.map((blog) => {
      <li className="group/item hover:bg-slate-100 ...">
        <img src={blog.id} alt="id" />
        <div>
          <a href="{person.url}">{blog.title}</a>
          <p>{blog.author.user.username}</p>
          <p>{formatedDate(blog.publishDate)}</p>
        </div>
        <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href={`/blog/${blog.id}`}>
          <span className="group-hover/edit:text-gray-700 ...">read</span>
          <svg className="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
          </svg>
        </a>
      </li>
    })}
  </ul>
}

export default TopBlogsList;
