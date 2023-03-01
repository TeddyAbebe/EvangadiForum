require("dotenv").config();
const pool = require("./server/config/database")
const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(port, () => console.log(`Listenening at http://localhost:${port}`));
