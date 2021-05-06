const path = require('path')

/**
 *  * The function dirname --> returns the directory name of a path
 **/

console.log(path.dirname(process.mainModule.filename))
module.exports = path.dirname(process.mainModule.filename)