<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<todo-header :addTodo="addTodo"/>-->
      <todo-header @addTodo="addTodo"/>
      <!--<List :todos="todos" :deleteTodo="deleteTodo"/>-->
      <List :todos="todos"/>
      <todo-footer>
        <input type="checkbox" v-model="isCheck" slot="check"/>
        <span slot="count">已完成{{completedCount}} / 全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completedCount" @click="deleteComputed" slot="btn">
          清除已完成任务
        </button>
      </todo-footer>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  import List from "./components/List.vue"
  import Footer from "./components/Footer.vue"

  import PubSub from "pubsub-js"

  export default {
    data () {
      return {
        todos: [
          {title: "上课", completed: false},
          {title: "下课", completed: false},
          {title: "发呆", completed: true}
        ]
      }
    },

    computed: {
      completedCount() {
        return this.todos.reduce((preTotal, todo) => preTotal+(todo.completed ? 1 : 0), 0)
      },

      isCheck: {
        get () {
          return this.todos.length === this.completedCount && this.completedCount > 0
        },

        set (value) {
          this.selectAll(value)
        }
      }
    },

    mounted () {
      PubSub.subscribe("deleteTodo", (msg, index) => {
        this.deleteTodo(index)
      })
      /*deleteTodo () {

      }*/
    },

    components: {
      TodoHeader: Header,
      List,
      TodoFooter: Footer
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      deleteComputed () {
        this.todos = this.todos.filter(todo => !todo.completed)
      },
      selectAll (check) {
        this.todos.forEach(todo => todo.completed = check)
      }
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
