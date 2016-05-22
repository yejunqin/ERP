<template>
    <div class="test"><h1>{{msg}}</h1></div>
</template>
<style lang="less">
  .test{
    h1{
      color: aquamarine;
    }
  }
</style>
<script>
    export default{
          data(){
            return {
                msg: '.hi,这是测试页，看到即表示路由导向成功了。额。123'
            }
        }
    }
</script>
