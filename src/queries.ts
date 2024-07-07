import { gql } from "@apollo/client";

export const GET_POST = gql`
query MyQuery($id: Int!) {
  postById(id: $id) {
    body
    dateCreated
    dateModified
    published
    publishDate
    subtitle
  }
}
`;

export const GET_TOP_BLOGS = gql`
  query {
    allPosts {
      id
      title
      publishDate
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


export const GET_ALL_BLOGS = gql`
query {
  allPosts {
    id
    title
    subtitle
    imageUrl
    metaDescription
    dateCreated
    dateModified
    publishDate
    published
  }
}
`;


export const GET_BLOG_CATEGORIES = gql`
 query{
  allTags {
    id
    name
  }
}
`;