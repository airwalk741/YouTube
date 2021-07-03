<template>
  <div class="search-bar d-flex" :style="{ margin: isVideoList ? '0' : '40vh 0'}">
    <i class="fab fa-youtube"></i>
    <input class="search-input search-placeholder" 
    type="text" 
    @keyup.enter="inputSearch" 
    v-model="searchData"
    placeholder="Search"
    >
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data : function () {
    return {
      searchData: '',
      isVideoList: false,
    }
  },
  props: {
    
  },
  methods: {
    inputSearch: function () {
      this.$store.dispatch('inputSearch', this.searchData)
      this.isVideoList = true
      this.$emit('search')
    }
  }
}
</script>

<style>



.search-input {
  width: 100%;
  height: 50px;
}

.search-placeholder {
  font-size: 2rem;
  padding: 1rem;
}

.search-bar {
  margin: 40vh 0;
  transition: 1s;
}

.fa-youtube {
  font-size: 3rem;
  margin-right: 0.8rem;
  color: crimson;
}

</style>
