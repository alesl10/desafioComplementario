import messageModel from '../models/messages.js';

export default class Messages{
    constructor(){
        console.log('trabajando con mongo db')
    }

    getAll = async()=>{
        let messages = await messageModel.find().lean();
        return messages
    }

    saveProducts = async message=>{
        let result = await messageModel.create(message)
        return result
    }
}