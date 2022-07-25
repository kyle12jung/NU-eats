const express = require('express')
const router = express.Router()
const cors = require('cors');
const yelp = require('yelp-fusion');
const apiKey = '6l9ft2-DTAIZ8hECpQowMUTNa8geaA1Mw4H3t0qrNH4Ov1BzqAJ4McSYQwLmt40KHhK6CZ43SYdXc509C2pXX8Nk1hRdCWes_vs8BOoQf-HQS3EImwZD54t59nXZYnYx';
const client = yelp.client(apiKey);
router.use(cors());

router.get('/', (req, res) => {
    // client.search({
    //     location: 'evanston',
    //     categories: 'burgers',
    //     limit: '50',
    // }).then(response => {
    //     console.log(JSON.stringify(response.jsonBody));
    //     res.send(response.jsonBody.businesses);
    // }).catch(e => {
    //     console.log(e);
    // });
    res.send("NU EATS API ENDPOINT: THAI")
})

router.get('/:id', (req, res) => {
    client.search({
        location: '60201',
        categories: 'thai',
        offset: req.params.id,
        limit: '50',
    }).then(response => {
        console.log(JSON.stringify(response.jsonBody));
        res.send(response.jsonBody.businesses);
    }).catch(e => {
        console.log(e);
    });
})

module.exports = router;