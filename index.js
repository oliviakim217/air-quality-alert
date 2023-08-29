import express from "express";
import axios from "axios";
 
const app = express();
const port = 3000;
const apiKey = "ed802ebf-f249-4ad7-85ae-1d894e8e3b51";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    // Fetch air pollution data from Air Visual
    try{
        const result = await axios.get(`http://api.airvisual.com/v2/city?city=Toronto&state=Ontario&country=Canada&key=${apiKey}`);
        const aqi = result.data.data.current.pollution.aqius;
        const mainPollutant = result.data.data.current.pollution.mainus;
        const timeStamp = result.data.data.current.pollution.ts.slice(0, 10);
    
        res.render("index.ejs", { aqi: aqi, mainPollutant: mainPollutant, timeStamp: timeStamp });    
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});