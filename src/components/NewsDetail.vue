<template>
  <div class="detail">
    <h5>当前的参数为{{id}}</h5>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: ''
    };
  },
  created() {
    this.id = this.$route.query.id;
    console.log(this.$route.query);
  },
}
</script>

