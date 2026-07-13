const express = require('express')
const app = express()
const PORT = 3000



app.get('/', (req, res)=>{
    res.send("<h1> I have heard and this is my response </h1>")
})

app.get('/aboutus', (reg, res)=>{
    res.send("<h2> Hello </h2>")
})


app.listen(PORT, (err)=>{
    if(err){
        console.error(err)
    }else{
        console.log("Web app started sucsessfully")
    }
})
