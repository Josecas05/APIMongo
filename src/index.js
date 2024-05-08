const express =require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const parqueoRouter = require("./routes/registroParqueo");
const app = express();
const port = process.env.PORT || 9000;

//middelware
app.use(express.json());

app.use('/api',parqueoRouter);
// routes
app.get('/',(req,res)=> {
    res.send("Welcome api")
})


//MongoDb conection 
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to Mongo Atlas'))
.catch((error)=> console.error(error));



app.listen(port,()=> console.log('server listening on port', port))