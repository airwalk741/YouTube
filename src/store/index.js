import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchData: '',
    youtubeData: []
  },
  mutations: {
    INPUT_SEARCH: function (state, searchData) {
      state.searchData = searchData
    },
    YOUTUBE_DATA: function (state, youtubeData) {
      state.youtubeData = youtubeData
    }
  },
  actions: {
    inputSearch: function ({ commit }, searchData) {
      commit('INPUT_SEARCH', searchData)
    },
    youtubeData: function ({ commit }, youtubeData) {
      commit('YOUTUBE_DATA', youtubeData)
    }
  },

})
