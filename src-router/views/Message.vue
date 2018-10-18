<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="index">
        <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          messages: []
        }
      },

      mounted () {
        setTimeout(() => {
          const messages = [
            {id:1, title: "message01"},
            {id:3, title: "message03"},
            {id:5, title: "message05"}
          ];
          this.messages = messages
        }, 1000)
      }
    }
</script>

<style scoped>

</style>
