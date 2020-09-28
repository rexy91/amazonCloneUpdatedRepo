import express from 'express'

// Data contains our products
import data from './data'

const app = express()

app.get('/products', (req, res) => {

    res.send(data.products)

})

app.listen(3000, ()=> console.log('Server started at http://localhost:3000'))
