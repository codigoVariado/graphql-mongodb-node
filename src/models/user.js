import { Schema , model } from 'mongoose'

const userSchema = new Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String
    },
    age : Number
})


export default model('User' , userSchema)