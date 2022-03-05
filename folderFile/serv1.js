const express = require('express');

const router = express.Router();

router.get('/trys', (req, res) => {
    res.json({data: 'Hello' });
}); 

module.exports = router;