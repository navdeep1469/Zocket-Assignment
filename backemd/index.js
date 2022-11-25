const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const connectToMongo = require("./db");
const campaignRoutes = require("./routes/campaignRoutes");

//No need to use body parser as it is now already included in expres now
app.use(cors());
app.use(express.json());
//Listening to the routes registered on the router
app.use("/api/campaign", campaignRoutes);

//using Port number 5000 as 3000 is being used in the frontend
const port = process.env.PORT;
app.listen(port, () => {
  console.log("servver running at " + port);
});
