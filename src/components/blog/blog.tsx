import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_POST = gql`
  query GetPost($id: Int!) {
    post(id: $id) {
      id
      title
      subtitle
      metaDescription
      dateCreated
      dateModified
      publishDate
      published
      slug
      imageUrl
    }
  }
`;

const GET_RELATED_POSTS = gql`
  query GetRelatedPosts($metaDescription: String!) {
    relatedPosts(metaDescription: $metaDescription) {
      id
      title
      slug
      imageUrl
    }
  }
`;

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_POST, { variables: { id: parseInt(id) } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data.post;

  const { loading: relatedLoading, error: relatedError, data: relatedData } = useQuery(GET_RELATED_POSTS, { variables: { metaDescription: post.metaDescription } });

  if (relatedLoading) return <p>Loading related posts...</p>;
  if (relatedError) return <p>Error loading related posts: {relatedError.message}</p>;

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} className="w-full h-auto mb-6" />
      <p className="text-gray-700 mb-4">{post.subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: post.metaDescription }} className="prose mb-8"></div>
      <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedData.relatedPosts.map(relatedPost => (
          <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {relatedPost.imageUrl && <img src={relatedPost.imageUrl} alt={relatedPost.title} className="w-full h-48 object-cover" />}
            <div className="p-6">
              <h3 className="text-lg font-bold">{relatedPost.title}</h3>
              <a href={`/post/${relatedPost.slug}`} className="mt-4 inline-block text-blue-600 hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
