<template>
  <div class="hello">
  <login/>
  </div>
</template>

<script>
import login from '@/components/LoginPage.vue';
export default {
    components: { login },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
