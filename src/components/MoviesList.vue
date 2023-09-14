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
    <MovieCard v-for="movie in this.store.moviesData" :movieDetails="movie" />
  </div>
</template>

<style lang="scss"></style>
