const express = require('express');
const app = express();
const port = 8080;
app.use(express.static('./server/public'));













app.listen(port, function(){
    console.log('listening on port:', port);
})