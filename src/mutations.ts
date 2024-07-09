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
mutation TokenAuth($password:String!, $username:String!) {
    tokenAuth(password:$password, username: $username) {
            token
            user {
                dateJoined
                firstName
                id
                lastLogin
                profile {
                    bio
                    email
                    id
                }
            }
        }
    }    
`;
