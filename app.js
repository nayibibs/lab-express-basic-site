const express = require("express")
const app = express()

app.get("/",(rep,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/about",(rep,res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/works",(rep,res) => {
    res.sendFile(__dirname + "/views/works.html")
})

app.get("/galery",(rep,res) => {
    res.sendFile(__dirname + "/views/galery.html")
})

app.listen(3000, () => {
    console.log("Iniciar servidor")
})