import { Router } from "express"
import Products from '../dao/dbManagers/products.js'

const router = Router()
const productManager= new Products();

router.get('/', async(req,res)=>{
    let products = await productManager.getAll();
    res.send({status:"succes", payload:products})
})

router.post('/', async (req,res)=>{
    const {title, price, category, description } = req.body
    let newProduct={
        title,
        price,
        category,
        description,
        stock: 15
    }
    const result = await productManager.saveProducts(newProduct)
    res.send({status:"success", payload:result})
})

// obtener productos por parametro
router.get('/:pid', async(req,res)=>{
    let idProduct = parseInt(req.params.pid)
    let products = await productManager.getAll()
    let product = products.find(x => x.id === idProduct)
    if(product){
        res.send({status:"succes", payload: product})
    }else{
        res.send({error:'fallo al obtener el producto'})
    }
})

export default router