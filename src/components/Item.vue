<template>
  <li :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTodo(index)">删除</button>
  </li>
</template>

<script>
  import PubSub from "pubsub-js"
  export default {
//    props: ["todo"]
    props: {
      todo: Object,
//      deleteTodo: Function,
      index: Number
    },

    data() {
      return {
        isShow: false,
        bgColor: "white"
      }
    },

    methods: {
      handleEnter (isEnter) {
        if(isEnter) {
          this.isShow = true;
          this.bgColor = "lightcyan"
        }else {
          this.isShow = false;
          this.bgColor = "white"
        }
      },
      deleteTodo () {
        PubSub.publish("deleteTodo", this.index)
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
