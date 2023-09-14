<script>
import MoviesList from "./MoviesList.vue";
import SeriesList from "./SeriesList.vue";

export default {
  components: { MoviesList, SeriesList },
};
</script>

<template>
  <div class="container">
    <MoviesList />
    <SeriesList />
  </div>
</template>

<style lang="scss"></style>
