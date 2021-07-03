<template>
  <div v-if="videoList.length" class="d-flex">
    <div class="video">
      <iframe id="player" type="text/html" 
        :src="videoUrl(videoList[0])"
        frameborder="0"
        style="width: 50rem; height: 30rem"
        >
      </iframe>
      <p class="fw-bold fs-4"> {{ videoList[0].snippet.title }} </p>
      <hr style="height: 0.2rem">
    </div>
    <div class="ms-3">
      <div v-for="video in videoList" :key="video.id.videoId">
        <div class="d-flex pointer mb-3" @click="inputSearch(video)">
          <img :src="thumbnailsImg(video)" alt="" style="width: 10rem; height: 8rem">
          <div style="margin: auto 0.5rem;"> {{ videoTitle(video) }} </div>
        </div>
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
    },
    videoTitle: function (video) {

      const title = video.snippet.title

      if (title.length > 20) {
        let result = ''
        for (let i = 0; i < 20;  i++) {
          result += title[i]
        }
        return result + '....'
      } else {
        return title
      }
      
    }
  }

}
</script>

<style>

.pointer {
  cursor: pointer;
}

.video {
  width: 60rem;
}

</style>