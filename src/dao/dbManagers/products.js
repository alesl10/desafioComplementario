import productsModel from '../models/products.js';

export default class Products{
    constructor(){
        console.log('trabajando con mongo db')
    }

    getAll = async()=>{
        let products = await productsModel.find().lean();
        return products
    }

    saveProducts = async product=>{
        let result = await productsModel.create(product)
        return result
    }



}

