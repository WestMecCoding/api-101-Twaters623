const express = require('express');
const app = express();
const port = 3000;


// app.get('/', (req, res) => {
//     res.send("Hello World")
// });
app.get('/', (req,res) =>{
    res.send("Carter Sucks")
})

app.get('/carter', (req,res) =>{
    res.send("gangsta")
})

app.listen(port, () =>{
    console.log(`server is listening on port${port}`)
});

