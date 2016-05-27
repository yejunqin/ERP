<template>
  <button :class="btnClasses">
    <slot></slot>
  </button>
</template>
<style rel="stylesheet/less" lang="less">

</style>
<script type="text/ecmascript-6">
  import classNames from 'classnames'
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
    props: {
      color: String,
      type: String,
      className: ''
    },
    computed: {
      btnClasses(){
        return classNames(this.color, this.type, this.className)
      }
    }
  }
</script>
