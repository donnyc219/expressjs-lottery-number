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
        res.send(response.data[0])
    })
    .catch(error => {
        console.log(error)
    })
})

app.get('/getLatestMegaMillion', (req, res) => {
    axios.get("https://data.ny.gov/resource/h6w8-42p9.json")
    .then(response => {
        res.send(response.data[0])
    })
    .catch(error => {
        console.log(error)
    })
})

app.listen(8080, () => console.log('Example app listening on port 8080!'))