import express from "express";
import axios from "axios";

// 
const app = express();
const port = 3000;
const apiKey = "ed802ebf-f249-4ad7-85ae-1d894e8e3b51";

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});