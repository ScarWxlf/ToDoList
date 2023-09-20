import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
var todos = [];

app.get("/", (req, res)=>{
    res.render("index.ejs",{
        todos: todos,
    })
})

app.get("/todos", (req,res)=>{
    res.send(todos)
})


app.post("/todos", (req,res)=>{
    todos.push({checked: false, text: req.body.text});
    res.send(todos)
})

app.put("/todos", (req, res)=>{
    todos[req.body.todo].checked=!todos[req.body.todo].checked;
    res.send(todos)
})

app.delete("/todos", (req,res)=>{
    todos.splice(req.body.todo, 1);
    res.send(todos)
})

app.listen(port, ()=>{
    console.log(`Server run on port ${port}`)
})



