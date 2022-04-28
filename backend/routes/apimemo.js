var express = require('express');
var router = express.Router();

//memo.json에 접근하기 위해 객체로 정의하기
const memos = require('../memo.json');

let count = 2;

//memo.json을 get으로 가져와서 출력...
router.get('/',function(req,res,next){
    res.send(memos);
});

//프론트엔드 writeview에서 post로 api/memo의 서버로 보낸 값을 받아서 메인 홈에 출력..
router.post('/',function(req,res,next){
    const memo = req.body.data;
    count++;
    const m = {
        id:count,
        writer:"익명",
        title:memo.title,
        memo:memo.memo,
    };
    memos.push(m);
});

//메모페이지에서 list 뒤에 붙여줄 id 가져오기
router.get("/:id", function(req,res,next){
    const id = req.params.id;

    const m = memos.filter( (memo)=>{
        if (memo.id == id) { return true; }}
        );   
    res.send(m[0]);
})
module.exports = router;