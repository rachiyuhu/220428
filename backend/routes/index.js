var express = require('express');
var router = express.Router();

//public에 있는 index.html에 접근한다는 뜻..인데 
//어차피 프론트엔드랑 연결했으니까 안넣어도 됨 삭제해도 됨
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;
