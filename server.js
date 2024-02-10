// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app=express();
// app.use(cors());
// app.use(express.json());

// const db=mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "signup"


// });

// app.post('/signup', (req,res)=>{
//     const sql="INSERT INTO LOGIN (`name`, `email`, `password`) VALUES (?)";
//     const values=[
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ];
//     db.query(sql,[values],(err,date)=>{
//         if(err){
//             return res.json("Error");

//         }
//         return res.json(data);
//     });
// });

// app.listen(8081,()=> {
//     console.log(listening);
// })

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path=requre('path');

const app=express();
app.use(cors());

app.use(express.json());

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

app.post('/signup', (req,res)=>{
    const sql="INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password,
    ];
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json(err);
        }
        return res.json(data);
    });
});



app.post('/login', (req, res)=>{
    const sql="SELECT * FROM login WHERE `email` = ? AND `password`= ?";
 
    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        }
        else {
            return res.json("Fail");
        }
        
    });
});


app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"frontend","build")));
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
});


const PORT = 1000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
