<template>
  <div id="app">
    
    <SearchBar @search="onSearch" />
    <VideoListItem :videoList="videoList" @search="onSearch" />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import VideoListItem from './components/VideoListItem.vue'
import axios from 'axios'

export default {
  name: 'App',
  data: function () {
    return {
      videoList: []
    }
  },
  components: {
    SearchBar,
    VideoListItem
  },
  methods: {
    onSearch: function () {
      const query = this.$store.state.searchData

      const url = 'https://www.googleapis.com/youtube/v3/search'
      const key = process.env.VUE_APP_KEY
      
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
        this.videoList = res.data.items
        console.log(res.data.items)
      })

 
    }
  }
}
</script>

<style>

</style>
