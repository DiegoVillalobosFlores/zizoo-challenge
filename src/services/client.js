import ApolloClient from 'apollo-boost';

const Client = new ApolloClient({
  uri: 'https://sls-sandbox.zizoo.com/graphql'
})

export default Client;
