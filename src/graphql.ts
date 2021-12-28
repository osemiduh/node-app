//import { ApolloServer } from "apollo-server";
import { GraphQLServer } from 'graphql-yoga'
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const typeDefs = `
    type Query {
        allUsers: [User!]!
    }

    type User {
        id: Int!
        email: String!
        name: String
        posts: [Post!]!
    }


    type Post {
        id: Int!
        title: String!
        content: String 
        published: Boolean
        author: User!
        authorId: Int!
    }
`

const resolvers = {
    Query: {
        allUsers () {
            return prisma.user.findMany()
        }
    }
}


const server = new GraphQLServer({ typeDefs, resolvers })

server.start({ port: 4002 }, () => {
    console.log("GraphQLServer is running")
})