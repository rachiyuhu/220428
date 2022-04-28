<template>
    <div>
        <h1>{{memo.title}}</h1>
        <p>{{memo.memo}}</p>
    </div>
</template>

<script>
export default {
    data () {
        return ({
            memo : {} //새로 받아올거라서 비워둠
        })
    },
    created() {
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response)=> {
            this.memo = response.data;
        })
    },
    
}
</script>