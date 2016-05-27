<template>
  <div class="v-table">
    <table>
      <thead>
        <tr>
          <th v-for="col in columns">{{col.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dataSource">
          <td v-for="col in columns">
            {{data[col.dataIndex}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
</style>
<script>
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
    props:{
      dataSource: {
        type: Array,
        required: true
      },
      columns: {
        type: Array,
        required: true
      }
    }
  }
</script>
