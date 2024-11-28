const express= require("express");
const app= express();
const mongoose= require("mongoose")
const port=5000;
const CORS= require("cors");
app.use(CORS())


const url = 'mongodb+srv://kavinnaresh:kamal@cluster0.4wsqs.mongodb.net/restaurant?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error', err));

    
app.use(express.json());
const router= require("./router/router")
app.use("/komato",router);


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})