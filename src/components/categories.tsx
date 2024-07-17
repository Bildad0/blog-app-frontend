import { useQuery } from '@apollo/client';
import { GET_BLOG_CATEGORIES } from '../queries';
import TopBlogsList from './blog/topblogs';



function Tags() {
    const { loading, error, data } = useQuery(GET_BLOG_CATEGORIES);
    if (loading) return <p> Loading...</p>
    if (error) return <p>{error.message}</p>

    return data.allTags.map((category) => {
        return (
            <div key={category.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
                <p className="text-gray-700">{category.desc}</p>
            </div>
        )
    })
}


const BlogCategories = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col p-4">
            <h1 className="text-4xl font-bold mb-8">Blog Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Tags />
            </div>
            <div className='m-2'>
                <TopBlogsList />
            </div>
        </div>
    )
}

export default BlogCategories

