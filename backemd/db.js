const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://waheguru1469:waheguru1469@cluster0.besop.mongodb.net/Zocket";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
