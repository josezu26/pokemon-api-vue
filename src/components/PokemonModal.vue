<template>
  <div>
    <a-modal v-model:visible="pokemonModal" title='Detalle' @cancel="cancel" @ok="handleOk"
      :footer="null"
    >
      <p><b>Nombre</b> : {{ pokemon.name }}</p>
      <p><b>Experiencia base</b> : {{ pokemon.base_experience }}</p>
      <p><b>Altura</b> : {{ pokemon.height }}</p>
      <p><b>Peso</b> : {{ pokemon.weight }}</p>
      <p>
        <b>Habilidades</b> : 
        <span v-for="(number, i) in pokemon.abilities" :key="i">
          {{ number.ability.name }} -
        </span>
      </p>
      <p>
        <b>Tipo</b> :
        <span v-for="(index, i) in pokemon.types" :key="i">
          {{ index.type.name }} -
        </span>
      </p>
    </a-modal>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'PokemonModal',

  data(){
    return {
      titulo: 'Pikachu'
    }
  },

  computed: {
    ...mapState(['pokemon', 'pokemons', 'pokemonModal'])
  },

  methods: {

    ...mapActions(['fetchPokemon']),
    ...mapMutations(['setPokemonModal']),

    showModal(){
      this.pokemonModal = true;
    },
    handleOk(e){
      console.log(e);
      this.setPokemonModal(false);
    },
    cancel(e){
      this.setPokemonModal(false);
    }
  }
};
</script>