const express = require("express");
const cors = require('cors');
require('dotenv').config(); 
const morgan = require("morgan");
const todoController = require("./controllers/todo.controller");
const mongoose = require('mongoose');

//  const url = "http://localhost:3000";
   const url = "https://1muhiredavid.github.io/rpc_program";
const app = express();
app.use(cors({
    origin: `${url}`,
    credentials: true,
}));
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to DB");
})
.catch(error => {
    console.error("Error connecting to MongoDB:", error);
});

// Set up middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"))

// Define routes
app.get("/", (req, res) => {
    res.send("welcome!");
});

app.post("/RPC", async (req, res) => {
    try {
        const result = await todoController[req.body.type](req.body.payload);
        res.send(result);
    } catch (error) {
        console.error(`Error processing ${req.body.type} request:`, error);
        res.status(500).send({ result: 'error', message: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});
