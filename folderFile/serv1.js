const express = require('express');

const router = express.Router();

router.get('/trys', (req, res) => {
    res.json({data: 'Hello' });
}); 

router.get('/env', (req, res) => {
    res.json({ data: process.env.PORT || 'jhi' });
})

module.exports = router;