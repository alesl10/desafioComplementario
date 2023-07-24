import { Router } from "express";
import Products from '../dao/dbManagers/products.js';
import Carts from '../dao/dbManagers/cart.js';

const productManager= new Products();
const cartManager= new Carts();

const router = Router();

router.get('/', async(req,res)=>{
    let products = await productManager.getAll();
    console.log(products)
    res.render('products', {products})
})

router.get('/carts', async(req, res)=>{
    let carts = await cartManager.getAll();
    console.log(carts)
    res.render('carts', {carts})
})

router.get('/realTimeProducts', async(req, res)=>{
    res.render('realTimeProducts', {})
})

router.get('/chat',async (req, res)=>{

    res.render('chat');
})

export default router;