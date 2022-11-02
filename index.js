const express = require ('express')
const path=require('path')
const ejs=require('ejs')
const {connectDB}=require('./db')

connectDB()
const app = express()

//settings
app.set('views',path.join(__dirname,'views'))//para dirigir a nodejs que aca estan los views
app.set('view engine','ejs')

//static files
app.use(express.static(__dirname+'/public'))

//routes
app.get('/profile',(req,res)=>{
    res.render('profile',{
        name:'Rodrigo',
        age:33
    })
})



//start server 
app.listen(process.env.PORT||3000)

console.log('Listening port',process.env.PORT||3000)