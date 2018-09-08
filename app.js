const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

// powerball
// https://data.ny.gov/resource/8vkr-v8vh.json

// megamillio
// https://data.ny.gov/resource/h6w8-42p9.json

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/getLatestPowerball', (req, res) => {
    axios.get("https://data.ny.gov/resource/8vkr-v8vh.json")
    .then(response => {
        // res.send(response.data[0])
        const firstPowerball = response.data[0];
        var numsString = firstPowerball["winning_numbers"]
        var output = {
            draw_date: firstPowerball["draw_date"],
            multiplier: firstPowerball["multiplier"],
            winning_numbers: numsString.split(" ")
        };

        res.send(output)
    })
    .catch(error => {
        console.log(error)
    })
})

app.get('/getLatestMegaMillion', (req, res) => {
    axios.get("https://data.ny.gov/resource/h6w8-42p9.json")
    .then(response => {
        const firstMegaMillion = response.data[0];
        var numsString = firstMegaMillion["winning_numbers"]
        var output = {
            draw_date: firstMegaMillion["draw_date"],
            mega_ball: firstMegaMillion["mega_ball"],
            multiplier: firstMegaMillion["multiplier"],
            winning_numbers: numsString.split(" ")
        }
        res.send(output)
    })
    .catch(error => {
        console.log(error)
    })
})

app.listen(8000, () => console.log('Example app listening on port 8080!'))