const express = require('express');
const localStorage = require('localStorage');

const router = express.Router();

router.get('/sessionId', async (req, res) => {
    await localStorage.setItem('id', req.query.data);
    res.json({ suc: 'NNCNCNCNC' });
});

module.exports = router;