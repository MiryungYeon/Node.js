const express = require('express');
const http = require('http');
const app = express();

const path = require('path');

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port '+ app.get('port'));
});

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/apiService');

apiRouter.connect()

app.use('/', indexRouter);
app.use('/demo', indexRouter);

app.use('/apiservice', apiRouter.router);
