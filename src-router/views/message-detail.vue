<template>
    <ul>
      <li>id: {{$route.params.id}}</li>
      <li>title: {{messageDetail.title}}</li>
      <li>content: {{messageDetail.content}}</li>
    </ul>
</template>

<script>
  const allMessageDetails = [
    {id: 1, title: "messages01", content: "messages content01..."},
    {id: 3, title: "messages03", content: "messages content03..."},
    {id: 5, title: "messages05", content: "messages content05..."},
  ];

    export default {
      data () {
        return {
          messageDetail: {}
        }
      },

      mounted () {
        const id = this.$route.params.id;
        this.messageDetail = allMessageDetails.find(md => md.id === id*1)
      },

      watch: {
        $route: function () {
          const id = this.$route.params.id;
          this.messageDetail = allMessageDetails.find(md => md.id === id*1)
        }
      }
    }
</script>

<style scoped>

</style>
