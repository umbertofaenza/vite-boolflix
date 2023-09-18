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
  <div v-if="this.store.moviesData.length > 0" class="results-title">
    <h3>Movies</h3>
    <span>{{ this.store.moviesData.length }} result(s)</span>
  </div>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    <MovieCard
      v-for="movie in this.store.moviesData"
      :key="movie.id"
      :movieDetails="movie"
    />
  </div>
</template>

<style lang="scss">
.results-title h3 {
  margin-bottom: 0;
}

.results-title span {
  display: inline-block;
  color: #aaa;
  margin-bottom: 10px;
}
</style>
