var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

require('./routing/htmlRoutes.js')(app);
require('./routing/apiRoutes.js')(app);


app.listen(process.env.PORT || 3000, function(){
    console.log(`Server listening on ${(process.env.PORT||3000)}`)
});

