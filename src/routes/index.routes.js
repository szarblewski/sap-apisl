const express = require('express');
const router = express.Router();

router.get('/', home);



function home(req, res){
    res.send('Home Page!');
}



module.exports = router;