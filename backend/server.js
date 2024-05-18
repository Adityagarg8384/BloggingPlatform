const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router/router");
const dbconnect = require("./config/database");

dbconnect();

const corsOptions = {
    origin: true, // Allows requests from any origin
    credentials: true, // Allow sending cookies
};

// Use middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser()); 


app.use("/", router);


app.listen(8000, () => {
    console.log("Server has started successfully on port 8000");
});
