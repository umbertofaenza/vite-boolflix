<script>
import { store } from "../data/store";
import MoviesList from "./MoviesList.vue";
import SeriesList from "./SeriesList.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { MoviesList, SeriesList },
};
</script>

<template>
  <main>
    <div class="container">
      <h3 v-if="store.moviesData.length == 0 && store.seriesData.length == 0">
        Search for Movies and TV Series...
      </h3>
      <MoviesList />
      <SeriesList />
    </div>
  </main>
</template>

<style lang="scss">
main {
  min-height: 100vh;
  background-color: #1b1b1b;
  color: white;
}

// movies and series cards
.production-card {
  width: max-content;
  margin-bottom: 2rem;
  border: 1px solid #aaa;
  position: relative;

  &:hover .production-info {
    display: flex;
    align-items: center;
  }
}

.production-info {
  padding: 10px;

  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.75);

  position: absolute;
  top: 0;
  left: 0;
  display: none;

  li {
    padding: 10px 0;
  }

  span {
    font-weight: bold;
  }
}

.full-star {
  color: gold;
}

.flag {
  width: 50px;
}
</style>
