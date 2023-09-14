<script>
import { store } from "../data/store";

import MovieCard from "./MovieCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { MovieCard },
};
</script>

<template>
  <div class="container">
    <h3 v-if="this.store.moviesData.length > 0">Movies:</h3>
    <MovieCard v-for="movie in this.store.moviesData" :movieDetails="movie" />
  </div>
</template>

<style lang="scss"></style>
