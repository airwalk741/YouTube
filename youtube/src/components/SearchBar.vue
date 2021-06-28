<template>
  <div class="container">
    <input type="text" @keyup.enter="inputSearch" v-model="searchData">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data : function () {
    return {
      searchData: ''
    }
  },
  props: {
    
  },
  methods: {
    inputSearch: function () {
      this.$store.dispatch('inputSearch', this.searchData)
      this.searchData = ''
      this.$emit('search')
    }
  }
}
</script>


