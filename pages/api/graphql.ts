import { ApolloServer } from "apollo-server-micro";
import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from './../../utils/typeDefs';
import { resolvers } from './../../utils/resolvers';


const schema = makeExecutableSchema({
  typeDefs, resolvers
})

const handler = new ApolloServer({
  schema
})

export default handler: