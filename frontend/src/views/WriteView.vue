<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다.</h1>
    <!--글쓴이는 다 익명-->
    <input type="text" v-model="title"> <br>
    <textarea cols="30" rows="10" v-model="memo"></textarea> <br>
    <button @click="addmemo">전송</button>


  </div>
</template>
<script>
export default {
  data() {
    return {
      title:"",
      memo:"",

    }
  },
  methods : {
    addmemo() {
      this.$http.post('/api/memo', { //이 apimemo 주소가 능력을 가지려면 백엔드에서 수정해줘야함
      //프론트엔드에서는 계속 저 api에 요청만 하는중.. post로 백엔드에서 메모값 받아와서 넣어줄거임 
        data : {
          //어차피 작성자 입력란은 없으니까 저장해주는건 title이랑 memo만
          title:this.title,
          memo:this.memo,
        }
      }).then((response)=>console.log(response.data))
      this.$router.push('/')
    }
  }
}
</script>