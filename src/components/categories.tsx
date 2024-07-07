import { useQuery } from '@apollo/client';
import { GET_BLOG_CATEGORIES } from '../queries';



function Tags() {
    const { loading, error, data } = useQuery(GET_BLOG_CATEGORIES);
    if (loading) return <p> Loading...</p>
    if (error) return <p>{error.message}</p>

    return data.allTags.map((category) => {
        return <li className='flex flex-row gap-3 list-none m-2 ' key={category.id} >
            <a href={`/categories/?id=${category.id}`} className="block hover:text-blue-600 hover:bg-white p-2 rounded-full bg-gray-300 text-xl text-bold text-blue-900 ">{category.id}, {category.name}</a>
        </li>

    })
}


const BlogCategories = () => {
    return (
        <div className="mb-8 p-2">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className='flex flex-row gap-3 '>
                <Tags />
            </ul>
        </div>
    )
}

export default BlogCategories