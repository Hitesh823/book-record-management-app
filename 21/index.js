const express = require("express");

// Importing Routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Server is up and running sucessfully",
    });
});

app.use("/users", usersRouter);
app.use("/books", booksRouter)

/*
this is for users
app.delete("/users/:id",(req,res)=>{
 const {id} =req.params;

 const user = users.find((each)=> each.id === id);
 if(!user){
    return res.status(404).json({success: false, message: "User Does Not Exist"});
    }

    const index = users.indexOf(user);
    users.splice(index, 1);
    return res.status(200).json({success: true, message: "User Deleted Successfully"});
 

})
*/
app.get("*",(req, res)=>{
    res.status(404).json({
        message: "This route doesn't exist",
    });
})

app.listen(PORT, ()=>{
    console.log(`Server is up and running at PORT ${PORT}`);
})