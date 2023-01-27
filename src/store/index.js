import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    title: 'Bienvenidos a la tabla de Pokemon',
    pokemons: [],
    pokemon: null,
    pokemonModal: false
  },
  getters: {
    getPokemons (state) {
      return state.pokemons;
    }
  },
  actions: {
    async fetchPokemons ({ commit }){
      const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
      commit('setPokemons', data['results']);
    },

    async fetchPokemon ({ commit }, url) {
      const { data } = await axios.get(url)
      commit('setPokemon', data)
    }
  },
  mutations: {
    setPokemon: (state, payload) => (state.pokemon = payload),
    setPokemons (state, payload) {
      state.pokemons = payload;
      console.log(state.pokemons);
    },
    setPokemonModal: (state, payload) => (state.pokemonModal = payload)
  }
})
