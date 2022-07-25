'use strict';
const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
const yelp = require('yelp-fusion');
const apiKey = '6l9ft2-DTAIZ8hECpQowMUTNa8geaA1Mw4H3t0qrNH4Ov1BzqAJ4McSYQwLmt40KHhK6CZ43SYdXc509C2pXX8Nk1hRdCWes_vs8BOoQf-HQS3EImwZD54t59nXZYnYx';
const client = yelp.client(apiKey);
app.use(cors());

app.get('/', (req, res) => {
    // client.search({
    //     location: '60201',
    //     offset: '100',
    //     limit: '50'
    // }).then(response => {
    //     console.log(JSON.stringify(response.jsonBody));
    //     res.send(response.jsonBody.businesses);
    // }).catch(e => {
    //     console.log(e);
    // });
    res.send("NU EATS API ENDPOINT")
})

const burgerRouter = require('./routes/Burgers')
app.use('/burgers', burgerRouter)

const pizzaRouter = require('./routes/Pizza')
app.use('/pizza', pizzaRouter)

const chineseRouter = require('./routes/Chinese')
app.use('/chinese', chineseRouter)

const koreanRouter = require('./routes/Korean')
app.use('/korean', koreanRouter)

const japaneseRouter = require('./routes/Japanese')
app.use('/japanese', japaneseRouter)

const thaiRouter = require('./routes/Thai')
app.use('/thai', thaiRouter)

const mexicanRouter = require('./routes/Mexican')
app.use('/mexican', mexicanRouter)

const brunchRouter = require('./routes/Brunch')
app.use('/brunch', brunchRouter)

const indianRouter = require('./routes/Indian')
app.use('/indian', indianRouter)

const mediterraneanRouter = require('./routes/Mediterranean')
app.use('/mediterranean', mediterraneanRouter)

app.listen(port, () => console.log(`App listening on port ${port}!`))