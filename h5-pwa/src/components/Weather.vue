<template>
  <div class="weather">
    <div class="header">

    </div>
    <div class="footer">
      <ul>
        <li v-for="(item, index) of list" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  props: {
    msg: String
  },
  data() {
    return {
      list: [
        {
          name: 'Monday',
        },
        {
          name: 'Tuesday',
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header{
  height: 60vh;
}
.footer{
  height: 40vh;
  ul{
    border: 1px solid red;
  }
}
</style>
