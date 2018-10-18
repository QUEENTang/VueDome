<template>
  <div class="todo-footer">
    <label>
      <slot name="check"></slot>
      <!--<input type="checkbox" v-model="isCheck"/>-->
    </label>
    <span>
      <slot name="count"></slot>
    </span>
    <slot name="btn"></slot>
  </div>
</template>

<script>
    export default {
      /*props: {
        /!*todos: Array,
        deleteComputed: Function,
        selectAll: Function*!/
      },

      computed: {
      }*/
    }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
