const express = require ('express');
const bodyParser = require("body-parser");
const cors = require ('cors');
const app = express ();
const mysql =require ('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'baseusuario'
});

app.use(cors()) ;
app.use(express.json()) ;
app.use(bodyParser.urlencoded ({ extended: true }));


app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM usuario";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const mail = req.body.mail;
    const username = req.body.username;
    const rut = req.body.rut;

    const sqlInsert =
        "INSERT INTO usuario (name, lastname, mail, username, rut) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [name, lastname, mail, username, rut], (err, result) => {
        console.log(result);
    });
    
});


app.delete("/api/delete/:rut", (req, res) => {
    const rut = req.params.rut;
    const sqlDelete = "DELETE FROM usuario WHERE rut = ?";

    db.query (sqlDelete, rut, (err, result) => {

        if (err) console.log(err);

    });   
});

app.put ("/api/update", (req, res) => {
    const rut = req.body.rut;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const mail = req.body.mail;
    const username = req.body.username;
    const sqlUpdate = "UPDATE usuario SET name= ? ,lastname= ? ,mail= ?, username=?  WHERE rut = ?";

    db.query (sqlUpdate, [name, lastname, mail, username,rut], (err, result) => {
        if (err) console.log(err);

    });   
});


app.listen (3001, ()=> {
    console.log("Corriendo server en puerto 3001");
});





