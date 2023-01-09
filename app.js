// console.log('Working')
const express = require('express')
const app = express()

// console.log('great')


app.use('/',express.static('./public'))
app.use('/admin' ,express.static('./admin-public'))

const PORT = process.env.PORT || 7000

app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`))