const express = require('express');
const app = express();
const users = require('./users/index');
const pins = require('./pins/index');
const scrapper = require('./scrapper')
const bodyParser = require('body-parser');
const path = require('path');
const buildFolder = path.join(__dirname, '../webapp/build')

app.use(bodyParser.json());
app.use('/api/users/', users);
app.use('/api/pins/', pins);
app.use('/api/scrapper/', scrapper)
app.use(express.static(buildFolder))

app.listen(process.env.PORT || 9090,(error)=>{
    if(error)console.log(error.message);
    console.log('Listening..')
});

