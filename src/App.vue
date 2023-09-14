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
    };
  },

  components: { AppHeader, AppMain },

  methods: {
    fetchMoviesByQuery(endpoint) {
      axios.get(endpoint).then((response) => {
        store.moviesData = response.data.results;
      });
    },
  },

  created() {
    this.fetchMoviesByQuery(
      "https://api.themoviedb.org/3/search/movie?api_key=5c764612f10030f97b723e24778692e4&query=anelli"
    );
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss"></style>
