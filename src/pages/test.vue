<template>
    <div class="test"><h1>{{msg}}</h1><button @click="clickTest">click</button></div>
</template>
<style rel="stylesheet/less" lang="less">
  .test{
    h1{
      color: aquamarine;
    }
  }
</style>
<script type="text/ecmascript-6">
  import { Promise } from 'es6-promise';
  console.log('loadTestPage');
    export default{
          data(){
            return {
                msg: 'testPage',
                list:[]
            }
        },
          methods: {
            clickTest(){
              console.log(this);
            },
            promiseTest(num){
              return new Promise((resolve, reject) => {
                console.log('setting promise');
                setTimeout(() => {
                  if(num){
                    resolve(num);
                  }else{
                    reject('error');
                  }
                }, 1500)
              })
            }
          },
          route: {
            data(to){
              console.log('load');
              console.log(to);
              this.promiseTest(3).then((data) => {
                console.log(data);
              }, (error) => {
                console.log(error);
              })
              return{
                list: [Math.random()]
              }
            }
          }
    }
</script>
