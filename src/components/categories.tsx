import { gql, useQuery } from '@apollo/client';

const GET_BLOG_CATEGORIES = gql`
 query{
    allPosts {
        tags{
            id
            name
        }
    }
}
`;

function Tags() {
    const { loading, error, data } = useQuery(GET_BLOG_CATEGORIES);
    if (loading) return <p> Loading...</p>
    if (error) return <p>{error.message}</p>

    return data.allPosts.map((category) => {
        return <ul key={category.tags.id} className='list-none flex flex-row gap-3 '>
            <li className='flex flex-row gap-3'>{...category.tags.map((tag) => {
                return <a href={`/categories/?id=${tag.id}`} className="block py-2 hover:text-blue-600 hover:bg-white p-2 rounded-full ">{tag.name}</a>
            })}</li>
        </ul>
    })
}


const BlogCategories = () => {
    return (
        <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className=''>
                <Tags />
            </div>

        </div>
    )
}

export default BlogCategories