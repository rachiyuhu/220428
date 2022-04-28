<template>
  <div class="home">
  <h1>메모</h1>
  <table>

    <tr v-for='(memo,i) in memo' :key=i>
      <td>{{memo.id}}</td>
      <td>{{memo.writer}}</td>
      <td @click="$router.push(`/list/${memo.id}`)">{{memo.title}}</td>
    </tr>
  </table>

  </div>
</template>

<script>
export default {
  data () {
    return ({
      memo : [] 
    })
  },
  created() {
    //get으로 클라이언트가 작성한 memo값을 가져오도록 함 
    // 이걸 요청하면 백엔드에서 get으로 보내주는 역할(익명도 거따쓰는듯)
    this.$http.get("/api/memo")
    .then((response)=>{
      this.memo = response.data;
    })
  }
}
</script>
