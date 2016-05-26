<template>
  <div id="app">
    <div class="header">
      <ul class="menu">
        <li>
          <span class="lv1">库存管理</span>
        </li>
        <li>
          <span class="lv1">采购管理</span>
        </li>
        <li>
          <span class="lv1">综合查询</span>
          <ul class="sub-menu">
            <li class="lv2"><a class="link">二级菜单</a></li>
            <li class="lv2"><a class="link">二级菜单</a></li>
            <li class="lv2"><a class="link">二级菜单</a></li>
          </ul>
        </li>
        <li>
          <span class="lv1">商品管理</span>
          <ul class="sub-menu">
            <li class="lv2"><a v-link="{name: 'baseOption'}" class="link">配件基本属性</a></li>
            <li class="lv2"><a v-link="{name: 'test'}" class="link">test</a></li>
            <li class="lv2"><a v-link="{name: 'hello'}" class="link">hello</a></li>
          </ul>
        </li>
        <li>
          <span class="lv1">统计分析</span>
        </li>
        <li>
          <span class="lv1">其他</span>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  @import "variables";
  @import "base";
  html {
    height: 100%;
    background-color: @lightGray;
  }
  body{
    width:1266px;
  }
  #app {
    width:100%;
    font-size:14px;
    font-family: Microsoft Yahei, Arial, san-serif, serif;
    .header{
      height:40px;
      line-height:40px;
      background-color: @purple;
      color: @font-white;
      .menu{
        float: right;
        li{
          list-style-type: none;
        }
        &>li{
          position: relative;
          float: left;
          margin-right: 20px;
          cursor: pointer;
          .sub-menu{
            position: absolute;
            display: none;
            width:120px;
            background-color: @purple + #111;
            .lv2{
              cursor: pointer;
              height:26px;
              line-height:26px;
              &:hover{
                background-color: @purple + #222;
              }
            }
            .link{
              color: @font-white;
              padding-left: 4px;
            }
          }
          &:hover .sub-menu{
            display: block;
          }
        }
      }
    }
  }
</style>

<script type="text/ecmascript-6">
//import Hello from './components/Hello'

export default {
//  components: {
//    Hello
//  },
  replace: false,
  data: function(){
    return {
      indexInfo: {
        num: Math.random()
      }
    }
  }
}
</script>
