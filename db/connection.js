const mongoose = require('mongoose');

const connectionstring = process.env.MONGO_URI
mongoose.connect(connectionstring).then((res)=> {
    console.log("Connected to database");
    
}).catch((err)=> {
    console.log("Error connecting to database",err);
    
})