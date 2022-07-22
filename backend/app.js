'use strict';
const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
const yelp = require('yelp-fusion');
const apiKey = '6l9ft2-DTAIZ8hECpQowMUTNa8geaA1Mw4H3t0qrNH4Ov1BzqAJ4McSYQwLmt40KHhK6CZ43SYdXc509C2pXX8Nk1hRdCWes_vs8BOoQf-HQS3EImwZD54t59nXZYnYx';
const client = yelp.client(apiKey);


app.use(cors());

// client.search({
//     // term: 'Four Barrel Coffee',
//     location: 'evanston',
//     categories: 'korean'
// }).then(response => {
//     console.log(response.jsonBody.businesses);
//     data = response.jsonBody.businesses;
// }).catch(e => {
//     console.log(e);
// });

app.get('/api', (req, res) => {
    client.search({
        // term: 'Four Barrel Coffee',
        location: 'evanston',
        categories: 'pizza',
        limit: '50'
    }).then(response => {
        console.log(JSON.stringify(response.jsonBody));
        res.send(response.jsonBody.businesses);
    }).catch(e => {
        console.log(e);
    });
})



app.listen(port, () => console.log(`App listening on port ${port}!`))