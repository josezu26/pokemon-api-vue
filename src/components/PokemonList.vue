<template>
  <div class="main">
    <a-table class="table" :dataSource="pokemons" :columns="columns">
      <template #bodyCell="{ column, index, record }">
        <template v-if="column.key === 'accion'">
          <button @click="capturarPokemon(record.url)">Ver detalles</button>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script>
import { mapState,mapActions, mapMutations } from 'vuex';

export default {
  name: 'PokemonList',
  data () {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Accion',
          dataIndex: 'accion',
          key: 'accion',
          align: 'center',
          width: '35%'
        }
      ]
    }
  },

  async created() {
        try {
            await this.fetchPokemons();
        } catch (error) {
            this.$message.error(error.message);
        } finally {
            this.loading = false;
        }
    },

  computed: {
    ...mapState(['pokemons', 'pokemon', 'pokemonModal'])
  },
  methods: {
    ...mapActions(['fetchPokemons', 'fetchPokemon']),
    ...mapMutations(['setPokemonModal']),
    async capturarPokemon(url){
      try {
        await this.fetchPokemon(url)
        //alert(this.pokemon.abilities[0].ability.name)
        this.setPokemonModal(true)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style>

.main {
  margin: 0;
  display: flex;
  justify-content: center;
}

.table {
  width: 70%;
  text-align: center;
}

</style>