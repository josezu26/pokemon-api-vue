<template>
  <div class="hello">
    <h1>{{ obtenerPrimero }}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',

  computed: {
    ...mapState(['mensaje']),
    ...mapGetters(['obtenerPrimero'])
  }
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
