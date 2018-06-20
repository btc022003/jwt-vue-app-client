<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">{{item.title}}</li>
    </ul>
    <div>
      <legend>Todo</legend>
      <div class="form-group">
        <label for="">主题</label>
        <input type="text" class="form-control" @keyup.enter="submitHandle" v-model="todo.title" placeholder="请输入主题">
      </div>
      <button type="submit" class="btn btn-primary" @click="submitHandle">提交</button>
  </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      todo: {
        title: '',
      },
    };
  },
  computed: {
    ...mapState('todos', ['list']),
  },
  methods: {
    ...mapActions('todos', ['getList', 'create']),
    submitHandle() {
      var txt = this.todo;
      this.create({ todo: txt });
      // this.todo.title = '';
    },
  },
  created() {
    this.getList();
  },
}
</script>

