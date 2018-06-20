<template>
  <div class="news">
    <h5>当前计数值为:{{$store.state.count}}</h5>
    <button @click="$store.commit('add')">加一</button>
    <ul>
      <li v-for="item in news" @click="clickHandle(item.id)" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: [
        { id: 1, title: '新闻一' },
        { id: 2, title: '新闻二' },
        { id: 3, title: '新闻三' },
        { id: 4, title: '新闻四' },
      ],
    };
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    clickHandle(id) {
      this.$router.push({
        name: 'NewsDetail',
        query: {
          id
        },
      });
    },
  },
};
</script>

