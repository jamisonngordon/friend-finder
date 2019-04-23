const authroutes = require('./app/routing/htmlRoutes.js');
const apiroutes = require('./app/routing/apiRoutes.js');
let express = require("express");

var app = express();

// Sets port to 8080 or checks env if deployed to heroku
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require routes
require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

//start app
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});