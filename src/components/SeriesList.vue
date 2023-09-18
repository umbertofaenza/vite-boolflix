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
  <h3 v-if="this.store.seriesData.length > 0">TV Series</h3>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    <SerieCard
      v-for="serie in this.store.seriesData"
      :key="serie.id"
      :serieDetails="serie"
    />
  </div>
</template>

<style lang="scss"></style>
