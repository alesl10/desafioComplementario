import cartsModel from '../models/carts.js';

export default class Carts{
    constructor(){
        console.log('trabajando con mongo db')
    }

    getAll = async()=>{
        let carts = await cartsModel.find().lean();
        return carts
    }

    savecart = async cart=>{
        let result = await cartsModel.create(cart)
        return result
    }
}