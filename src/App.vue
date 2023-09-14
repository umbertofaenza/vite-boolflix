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
    };
  },

  components: { AppHeader, AppMain },

  methods: {
    fetchMoviesByQuery(searchedTerm) {
      this.moviesQueryURL = `https://api.themoviedb.org/3/search/movie?api_key=5c764612f10030f97b723e24778692e4&query=${searchedTerm}`;

      axios.get(this.moviesQueryURL).then((response) => {
        store.moviesData = response.data.results;

        console.log(response.data.results);
      });
    },
  },

  created() {},
};
</script>

<template>
  <AppHeader @search-submit="fetchMoviesByQuery" />
  <AppMain />
</template>

<style lang="scss"></style>
