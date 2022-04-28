var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 히스토리 모듈 1
const history = require("connect-history-api-fallback");


var indexRouter = require('./routes/index');

//작성해둔 메모 라우터를 가져온다(페이지 열떄)
//const memoRouter = require('./routes/memo');


var app = express();


//apimemo.js를 가져와서 apiMemoRouter 라는 이름을 부여
const apiMemoRouter = require('./routes/apimemo');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//public 사용
app.use(express.static(path.join(__dirname, 'public')));

//히스토리 모듈 2
app.use(history());


app.use('/', indexRouter);

//apimemo.js를 사용
app.use('/api/memo',apiMemoRouter);



//메모라우터..
//app.use('/memo',memoRouter);



module.exports = app;
