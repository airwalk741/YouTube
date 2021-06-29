<template>
  <div v-if="videoList.length">

    <iframe id="player" type="text/html" 
      :src="videoUrl(videoList[0])"
      frameborder="0">
    </iframe>
    <p> {{ videoList[0].snippet.title }} </p>

    <div v-for="video in videoList" :key="video.id.videoId">
      <div class="d-flex pointer" @click="inputSearch(video)">
        <img :src="thumbnailsImg(video)" alt="">
        <div> {{ video.snippet.title }} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  data: function () {
    return {
      
    }
  },
  props: {
    videoList: {
      type: Array
    }
  },
  methods: {
    videoUrl: function (video) {
      return 'https://www.youtube.com/embed/' + video.id.videoId + '/?autoplay=1&mute=1'
    },
    thumbnailsImg: function (video) {
      return video.snippet.thumbnails.medium.url
    },
    inputSearch: function (video) {
      this.$store.dispatch('inputSearch', video.snippet.title)
      this.searchData = ''
      this.$emit('search')
    }
  }

}
</script>

<style>

.pointer {
  cursor: pointer;
}

</style>