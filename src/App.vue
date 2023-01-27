<template>
  <h1 class="title">Pokemon API</h1>
  <img class="logo" style="width:400px" alt="Vue logo" src="https://www.nicepng.com/png/full/62-622961_no-one-knows-if-people-eat-pokmon-png.png">
  <PokemonList></PokemonList>
  <PokemonModal></PokemonModal>
</template>

<script>
import PokemonList from './components/PokemonList.vue'
import PokemonModal from './components/PokemonModal.vue';

export default {
  name: 'App',
  components: {
    PokemonList,
    PokemonModal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 100px;
}
.title {
  font-size: 34px;
  font-family: 'Courier New', Courier, monospace;
}
</style>
