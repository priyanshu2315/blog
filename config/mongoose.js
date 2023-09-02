const mongoose  = require('mongoose');

main().catch(err=>console.log("err from main funcion in mongoose"));

async function main(){
    // await mongoose.connect('mongodb://127.0.0.1:27017/Blog')
    await mongoose.connect('mongodb+srv://admin:admin@database.kq77epd.mongodb.net/Blog_App?retryWrites=true&w=majority')
}


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to Database");
});



module.exports = db;