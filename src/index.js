const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

// define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log('server is up on port',port)
})