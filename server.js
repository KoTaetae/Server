const express = require('express');

//initialization:-

const app = express();

//application will now use the json format for data

app.use(express.json());

const port = 8081;

const toDoList = ["Play Badminton", "Watch Dramas"];


//http:localhost:8081/todos

app.get("/todos", (req,res) => {
  //callback

 res.status(200).send(toDoList);
});


app.post("/todos", (req,res) => {
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message : "Task added successfully!"
    })
})

app.delete("/todos", (req,res) => {
    
    
    const itemToDelete = req.body.item;
    toDoList.find((element, index) => {    
     if (element === itemToDelete){
    toDoList.splice(index, 1);
    }  

    });
    
    res.status(202).send({
        message: `Deleted item - "${req.body.item}" `,
    });

});


//app.get("/todos/create",);
//app.post("/todos/create",);

//put, patch

app.all("/todos", (req,res) => {
  res.status(501).send();
});

app.all("*", (req, res) => {
    res.status(404).send();
});



app.listen(port, () => {
    //callback
 
    console.log(`Nodejs server started from ${port}`);
})