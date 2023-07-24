import express from 'express';
import __dirname from './utils.js';

import handlebars from 'express-handlebars'
import { Server } from 'socket.io'

// rutas
import productsRouter from './routes/productsRouter.js'
import cartRouter from './routes/cartRouter.js'
import viewsRoute from './routes/viewsRouter.js'
import chatRouter from './routes/chatRouter.js'

import messageModel from './dao/models/messages.js'

// productos
import productos from './data/products.json' assert {type: 'json'}

// mongoose
import mongoose from 'mongoose';
mongoose.set('strictQuery', false)
const connection=mongoose.connect('mongodb+srv://lopezalexis499:Giorello93@ecommerce.pdilq1a.mongodb.net/?retryWrites=true&w=majority')

const app = express();
const httpserver = app.listen(8080, () => console.log("Servidor arriba"));
const io = new Server(httpserver)


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));


app.use('/', viewsRoute)
app.use('/api/products', productsRouter);
app.use('/api/carts', cartRouter);
app.use('/api/chat', chatRouter);

let messages=[];

io.on('connection', socket => {
    console.log("nuevo cliente")

    socket.emit('realTimeProducts', productos)

    socket.on('message', data =>{
        messages.push(data)
        io.emit('messagesLogs', messages)
        console.log(data)
        messageModel.create({
            user:data.user,
            message:data.message,
        })

    })
    


})




