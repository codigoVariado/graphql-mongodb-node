import mongoose from 'mongoose'

export async function Database() {
    try{
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser : true
        })
        
        console.log('>>>>>Db is connected');
        
    }catch(e) {
        console.log('Error')
        console.log(e)
    }
}