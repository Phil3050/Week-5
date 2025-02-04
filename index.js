const express = require('express')
const app = express()
const port = 5000

let std = [
    { id: 1, name: "Best"},
    { id: 1, name: "Film"},
]
app.get('/',(req , res) => res.send('Hello'))
app.listen(port, () => {
    console.log("Server is running on port", port)
})
