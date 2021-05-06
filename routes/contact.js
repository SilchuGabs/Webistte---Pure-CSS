const path = require('path')
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

//*Data that is collected should be stored in a Database. For this examples is stored in an array. 
const contactForms = [];

router.get('/contact', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))
});

router.post('/contact', (req, res) => {
    console.log(req.body);
    contactForms.push(req.body);
    res.redirect('/');
})


exports.routes = router;
exports.contactForms = contactForms;