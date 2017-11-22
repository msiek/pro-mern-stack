//require is a JavaScript keyword specific to Node.js and
//it is used to import other modules
const express = require('express');
//Instantiates the application then
//mounts the middleware to the application using app.use()
const app = express();
app.use(express.static('static'));
//listens for port 3000 to be used
app.listen(3000, function(){
    console.log('App start on port 3000');
});