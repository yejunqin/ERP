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
        <button class="blue-btn btn">查询(Q)</button>
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
            <button class="green-btn btn">图片维护</button>
            <button class="normal-btn">存储(S)</button>
            <button class="normal-btn">查销售(J)</button>
            <button class="normal-btn">查采购(H)</button>
            <input type="text" placeholder="请填写配件编号" class="parts-code-search">
            <button class="btn red-btn">增加(A)</button>
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
            <label>订货:</label>
            <select>
              <option value="">台湾丰田</option>
            </select>
            <label>产地:</label>
            <select>
              <option value="">中国</option>
            </select>
            <label>部件:</label>
            <select>
              <option value="">
                发动机件
              </option>
            </select>
            <label>网点:</label>
            <input type="text">
            <label>尺寸:</label>
            <select>
              <option value="">小件</option>
              <option value="">中件</option>
              <option value="">大件</option>
            </select>
            <label>体积:</label>
            <input type="text">
            <label>重量:</label>
            <input type="text">
            <label>花冠:</label>
            <input type="text">
            <label>年代:</label>
            <input type="text">
            <label>日元价:</label>
            <input type="text">
            <label>美元价:</label>
            <input type="text">
            <label>备注:</label>
            <input type="text">
          </div>
        </div>
        <div class="sub-parts-modify">
          <div class="head">
            <label>通用码:</label>
            <input type="text">
            <button class="normal-btn">添加</button>
            <button class="normal-btn">移除</button>
            <!--<v-btn color="green">移除</v-btn>-->
          </div>
          <div class="modify-body">
            <select>
              <option value="">配件分类</option>
            </select>
          </div>
        </div>
      </div>
      <Test :message="msg"></Test>
    </div>
</template>
<style rel="stylesheet/less" scoped lang="less">
  @import "../variables";
  .filter{
    margin-top: 6px;
  }
  .testClass{
    color: green;
  }
  .main-table{
    height:200px;
  }
  .parts-modify{
    width:70%;
    .head{
      height:30px;
      line-height:1;
      border-right: 1px solid #000;
    }
    .modify-body{
      //background: @extremeLightGray;
    }
  }
</style>
<script>
  import Test from './test.vue'
  import vTable from '../components/v-table.vue'
  const dataSource = [
    {
      "partsCode": 123456,
      "partsName": "发动机",
      "carType": "ipz-127",
      "engine": "zze"
    },
    {
      "partsCode": 123456,
      "partsName": "发动机",
      "carType": "ipz-127",
      "engine": "zze"
    }
  ]
  const columns = [
    {
      title: '配件编码',
      dataIndex: 'partsCode'
    },
    {
      title: '配件名称',
      dataIndex: 'partsName'
    },
    {
      title: '车型',
      dataIndex: 'carType'
    },{
      title: '发动机',
      dataIndex: 'engine'
    }
  ]
  export default{
    name: 'BaseOption',
    data(){
      return{
          msg:'hello vue'
      }
    },
    components:{
      Test,
      vTable
    }
  }
</script>
