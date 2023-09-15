<script>
export default {
  props: {
    serieDetails: Object,
  },
};
</script>

<template>
  <div class="container">
    <ul>
      <img
        :src="'https://image.tmdb.org/t/p/w342/' + serieDetails.poster_path"
      />
      <li>Title: {{ serieDetails.name }}</li>
      <li>Original Title: {{ serieDetails.original_name }}</li>
      <li>
        <img
          class="flag"
          :src="'/img/flags/' + serieDetails.original_language + '.png'"
          :alt="'Language: ' + serieDetails.original_language"
        />
      </li>
      <li>Vote: {{ serieDetails.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
.flag {
  width: 50px;
}
</style>
