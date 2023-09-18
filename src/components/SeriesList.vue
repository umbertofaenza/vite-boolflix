<script>
import { store } from "../data/store";

import SerieCard from "./SerieCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { SerieCard },
};
</script>

<template>
  <!-- title and results -->
  <div v-if="this.store.seriesData.length > 0" class="results-title">
    <h3>TV Series</h3>
    <span>{{ this.store.seriesData.length }} result(s)</span>
  </div>
  <!-- cards row -->
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    <SerieCard
      v-for="serie in this.store.seriesData"
      :key="serie.id"
      :serieDetails="serie"
    />
  </div>
</template>

<style lang="scss"></style>
