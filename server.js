/**------------------------------------------------------------------------
 * ?                                ABOUT
 * @author         :  Silvana Facciolo
 * @email          :  reactiveprogrammer@gmail.com
 * @repo           :  
 * @createdOn      :  
 * @description    :  Static Server using NodeJs (ExpressJS)
 *------------------------------------------------------------------------**/

/* ----------------------------- Gral Variables ----------------------------- */
const PORT = 3000;
const path = require('path');

/* ---------------------------- Global built-in imports ---------------------------- */
const express = require('express');
const app = express();

/* ------------------------------ Local imports ----------------------------- */
const aboutFile = require('./routes/about.js');
const contactData = require('./routes/contact.js');
//* To obtain the response from user, that is an object we can use
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/* -------------------------- Thrid-Parties imports ------------------------- */

/* -------------- Handlers - Setup of static directory to serve ------------- */
/** This middleware will grant access to Read only files. Such as css files, images  inside PUBLIC folder.
 * Potentially all static HTML files could be stored in here too.
 * Having a separate a) hides our code b) gives us the positibility to turn the content into dynamic Templates. 
 */
app.use(express.static(path.join(__dirname, 'public')));

//*Main Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});
app.use(aboutFile);
app.use(contactData.routes);

//*Error page
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'error.html'))

})

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });