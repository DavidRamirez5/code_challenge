const StudentController = require("./lib/controllers/StudentController");
const express = require("express");
const res = require("express/lib/response");
const app=express();
const port = 3000;
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({message:"Students Visual Partner Ship: ON"});
});

app.get("/v1/students",(req,res)=>{
    const students = StudentController.getStudents();
    res.json(students);
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});

// Instrucciones para continuar
// Logramos culplir el primer requerimiento, aun no se versiona server.js -> correr eslint  -> CI con Github actions antes del requerimiento 2
//Let's Go.