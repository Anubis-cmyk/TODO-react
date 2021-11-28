const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); 
const todoRoutes = require("./routes/todoRoutes"); 
const bodyparser = require('body-parser');

dotenv.config();
const app = express();
app.use(cors()); 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const PORT = process.env.PORT || 8070;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(
  MONGODB_URI,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  },
  (error) => {
    if (error) {
      console.log("DataBase ERROR: ", error.message);
    }
  }
);

mongoose.connection.once("open", () => {
  console.log("Database Synced");
});

 
app.use("/todo", todoRoutes); 
 

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
