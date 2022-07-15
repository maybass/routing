const express =  require('express')
const app = express()

//modularizando
const routes = require('./routes/rutas')
app.use(routes)

//app.use(require('./routes/rutas'))

app.listen(3000, (req,res)=> {
	console.log('servidor ok')
})