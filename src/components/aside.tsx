import TopBlogsList from './blog/topblogs';


const Aside = () => {
    return <aside className="bg-gray-200 p-8 rounded-md ">
        <div className="container mx-auto">
            <div>
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <TopBlogsList />
            </div>
        </div>
    </aside>
}


export default Aside