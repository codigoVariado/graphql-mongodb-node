import { resolvers } from './resolvers'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
    type Query {
        hello : String
        greet(name: String!) : String
        tasks : [Task]
        songs : [Song]
        users : [User]
    }

    type User {
        _id : ID
        firstname : String!
        lastname: String!
        age: Int!
    }

    
    type Task {
        _id : ID
        title : String!
        description : String
        number : Int!
    }
    type Song {
        _id : ID
        title : String!
        author : String!
    }


    type Mutation {
         createTask(input : TaskInput): Task
         createSong(input : SongInput): Song
         createUser(input : UserInput): User
         deleteUser(_id : ID): User
         updateUser(_id : ID, input : UserInput) : User
        }

        input UserInput {
            firstname : String!
            lastname : String!
            age: Int!
        }

    input TaskInput {
        title : String!
        description : String!
        number : Int
    }
    input SongInput {
        title : String!
        author : String!
    }

`;


export default makeExecutableSchema({
    typeDefs : typeDefs,
    resolvers : resolvers
})