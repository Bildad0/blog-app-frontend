import { gql } from "@apollo/client";



export const GET_RELATED_POSTS = gql`
query RelatedPosts($metaDescription: String!) {
  relatedPosts(metaDescription: $metaDescription) {
    id
    title
    slug
    imageUrl
  }
}
`;


export const CREATE_USER = gql`
mutation CreateUser($email: String!, $username: String!, $password: String!, ) {
  createUser(email:$email, username: $username, password: $password ) {
    user {
      id
      username
      email
    }
  }
}
`;


export const LOGIN = gql`
mutation TokenAuth($password: String!, $username: String!) {
  tokenAuth(password: $password, username: $username) {
    user {
      email
      lastLogin
      username
      isStaff
      isSuperuser
      profile {
        bio
        website
        postSet {
          dateCreated
          publishDate
          dateModified
          title
          subtitle
          tags {
            name
          }
          published
        }
      }
    }
    token
  }
}   
`;

export const VERIFY_TOKEN = gql`
mutation TokenAuth($token: String) {
  verifyToken(token: $token) {
    payload
  }
}
`;