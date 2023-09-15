<script>
// axios
import axios from "axios";

// store
import { store } from "./data/store";

// components
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
      moviesQueryURL: "",
      seriesQueryURL: "",
    };
  },

  components: { AppHeader, AppMain },

  methods: {
    fetchResultsByQuery(searchedTerm) {
      // movies
      this.moviesQueryURL = `https://api.themoviedb.org/3/search/movie?api_key=5c764612f10030f97b723e24778692e4&query=${searchedTerm}`;

      axios.get(this.moviesQueryURL).then((response) => {
        store.moviesData = response.data.results;
      });

      // tv series
      this.seriesQueryURL = `https://api.themoviedb.org/3/search/tv?api_key=5c764612f10030f97b723e24778692e4&query=${searchedTerm}`;

      axios.get(this.seriesQueryURL).then((response) => {
        store.seriesData = response.data.results;
      });
    },
  },

  created() {},
};
</script>

<template>
  <AppHeader @search-submit="fetchResultsByQuery" />
  <AppMain />
</template>

<style lang="scss">
img {
  max-width: 200px;
}
</style>
