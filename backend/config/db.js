const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
        // const conn = await mongoose.connect('mongodb://127.0.0.1:27017/mern', {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //   });
        
        const conn = await mongoose.connect('mongodb+srv://manikanta66:Hellobee%40123@cluster0.ebkkkrc.mongodb.net/');
        console.log(`mongoDB coonected : ${conn.connection.host}`);
    }
    catch(error){
        console.log("Error");
    }
}

module.exports = connectDB;
