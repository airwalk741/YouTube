<template>
  <div id="app">
    
    <SearchBar @search="onSearch" />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import axios from 'axios'

export default {
  name: 'App',
  data: function () {
    return {
   
    }
  },
  components: {
    SearchBar
  },
  methods: {
    onSearch: function () {
      const query = this.$store.state.searchData

      const url = 'https://www.googleapis.com/youtube/v3/search'
      const key = process.env.VUE_APP_KEY
      console.log(key)
      axios({
        url: url,
        method: 'GET',
        params: {
          key: key,
          q: query,
          part: 'snippet'
        }
      }).then(res => {
        this.$store.dispatch('youtubeData', res.data.items)
      })
    
 
    }
  }
}
</script>

<style>

</style>
