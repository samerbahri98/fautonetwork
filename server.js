const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
app.use(cors());

//connect to mongoDb

connectDB();

//middleware
app.use(express.json({ extended: false }));

//routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/users',require('./routes/users'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server on ${PORT}`));
