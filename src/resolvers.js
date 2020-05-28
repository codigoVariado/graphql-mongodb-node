import  { tasks, songs } from './sample'

import user from './models/user'

export const resolvers = {
    Query : {
        hello : () => {
            return 'Hello World con graphql'
        },
        greet(root, args)  {
            return `Hello ${args.name}`
        },
        tasks() {
            return tasks
        },
        songs() {
            return songs
        },
        async users(){
            const users = await user.find();
            return users
        }
    },
    Mutation : {
        createTask(_, { input }) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        createSong(_, { input }) {
            input._id = songs.length;
            songs.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new user(input);
            await newUser.save();
            return newUser;
        },
        async deleteUser(_,{ _id }) {
           return await user.findByIdAndDelete(_id)
        },
        async updateUser(_,{ _id, input }) {
            return await user.findByIdAndUpdate(_id, input, { new : true})
        }
    }
}