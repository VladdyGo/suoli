const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const INDEX_ADDRESS = '/Users/vladislavgoteiner/Desktop/Sing-up Baby/';

app.listen(3000,()=>{
    console.log("The server is up and running !");
});

app.use(express.static(INDEX_ADDRESS));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

app.get('/',(req,res) => {
    res.sendFile(INDEX_ADDRESS+'suoli.html');
});

app.post('/',(req,res) => {
    let db = fs.readFileSync('./scripts/database.json','utf-8');
    const newUser = req.body;
    let db1 = JSON.parse(db);
    db1.push(newUser);
    
    const ans = JSON.stringify(db1);
    fs.writeFileSync('./scripts/database.json',ans,'utf-8');
    //"A new User was added!")
});
