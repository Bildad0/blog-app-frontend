
import { ApolloClient, InMemoryCache } from '@apollo/client';


export const link = 'http://127.0.0.1:8000/graphql/';


export  const client = new ApolloClient({
    uri: link,
    cache: new InMemoryCache(),
    headers: {
        "Content-Type": "application/json",
    }
});

