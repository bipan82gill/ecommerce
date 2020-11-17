const express = require('express');
const data = require('./data.js');
const app = express();

app.get('/api/products', (req, res)=>{
    res.send(data.products);
})
app.get('/', (req, res)=>{
    res.send('server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`);
})
