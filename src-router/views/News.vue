<template>
    <ul>
      <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
    </ul>
</template>

<script>
    export default {
      data() {
        return{
          newsArr: ["news1", "news2", "news3"]
        }
      }
    }
</script>

<style scoped>

</style>
