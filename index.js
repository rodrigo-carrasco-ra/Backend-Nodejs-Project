const express = require ('express')

console.log(process.env)
const app = express()

//app.get('/',(req,res)=>res.send("<h1>Hola Mundo</>"))
app.use(express.static('public'))//express usa los archivos estaticos

app.listen(process.env.PORT||3000)

console.log('Listening port',process.env.PORT||3000)