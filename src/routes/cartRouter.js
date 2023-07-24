import { Router } from "express"
import Cart from '../dao/dbManagers/cart.js'

const router = Router()
const cartManager= new Cart();

router.get('/', async(req,res)=>{
    let carts = await cartManager.getAll();
    res.send({status:"succes", payload:carts})
})

router.post('/', async (req,res)=>{
    let newCart={
        products:[]
    }
    const result = await cartManager.savecart(newCart)
    res.send({status:"success", payload:result})
})

export default router