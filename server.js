// //Install express server
// const express = require('express');
// const path = require('path');
//
// const app = express();
//
// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/FDMcoding'));
//
// app.get('/*', function(req,res) {
//
// res.sendFile(path.join(__dirname+'/dist/FDMcoding/index.html'));
// });
//
// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/'));
app.use('/src/assets', express.static(__dirname + '/src/assets/'));


app.listen(process.env.PORT || 8080);
