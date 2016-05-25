<!--配件基础属性-->
<template>
    <div>
      <div class="filter">
        <label>编码</label>
        <input type="text">
        <label>简码</label>
        <input type="text">
        <label>车型</label>
        <input type="text">
        <label>分类</label>
        <select>
          <option value="1">FC</option>
          <option value="2">GF</option>
        </select>
        <label>类别</label>
        <select>
          <option value="1">一速流动</option>
          <option value="2">二速流动</option>
          <option value="3">三速流动</option>
        </select>
        <label>订货</label>
        <select>
          <option value=""></option>
        </select>
        <label>注册</label>
        <select>
          <option value="">已注册</option>
          <option value="">未注册</option>
        </select>
        <input type="checkbox" id="hasStock">
        <label for="hasStock">有库存</label>
        <button>查询(Q)</button>
        <button>导出</button>
        <button class="normal-btn">注册</button>
        <button class="normal-btn">标记总成</button>
      </div>
      <div class="main-table">
        <table class="parts-list"></table>
        <table class="sub-parts"></table>
      </div>
      <div class="modify">
        <div class="parts-modify">
          <div class="head">
            <button class="normal-btn">修改(M)</button>
            <button class="normal-btn">删除(D)</button>
            <button class="color-btn">图片维护</button>
            <button class="normal-btn">存储(S)</button>
            <button class="normal-btn">查销售(J)</button>
            <button class="normal-btn">查采购(H)</button>
            <input type="text" placeholder="请填写配件编号" class="parts-code-search">
            <button class="color-btn red-btn">增加(A)</button>
            <button class="normal-btn">导入(I)</button>
          </div>
          <div class="modify-body">
            <label>编号:</label><input type="text" disabled>
            <label>名称:</label><input type="text">
            <label>编码:</label><input type="text">
            <label>车型:</label><input type="text">
            <label>发动机:</label><input type="text">
            <label>单位:</label>
            <select>
              <option value="">套</option>
            </select>
            <label>简码:</label><input type="text">
            <label>车系:</label>
            <select>
              <option value="">一汽丰田</option>
            </select>
            <label>分类:</label>
            <select id="">
              <option value="">纯正</option>
            </select>
            <label>类别:</label>
            <select id="">
              <option value="">四速流动</option>
            </select>
          </div>
        </div>
        <div class="sub-parts-modify"></div>
      </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
@import "../../base";
  .filter{
    margin-top: 6px;
  }
  .testClass{
    color: green;
  }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        }
    }
</script>
