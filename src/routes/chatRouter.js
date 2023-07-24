import { Router } from "express"
import Messages from '../dao/dbManagers/chat.js'

const router = Router()
const messageManager = new Messages();

router.get('/', async (req, res) => {
    let messages = await messageManager.getAll();
    res.send({ status: "succes", payload: messages })
})

router.post('/', async (req, res) => {
    const { user, message } = req.body
    let newMessage = {
        user,
        message
    }
    const result = await messageManager.saveProducts(newMessage)
    res.send({ status: "success", payload: result })
})

export default router