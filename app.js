const express = require('express')
const app = express()
const port = 3000

app.get('/live', (req, res) => {
    res.send('Welcome to Test API hosted using Github Actions');
})

app.listen(port, () => {
    console.log(`Node JS API listening on port ${port}`);
})