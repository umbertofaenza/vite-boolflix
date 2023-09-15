<script>
export default {
  props: {
    movieDetails: Object,
  },
};
</script>

<template>
  <div class="container">
    <ul>
      <img
        :src="'https://image.tmdb.org/t/p/w342/' + movieDetails.poster_path"
      />
      <li>Title: {{ movieDetails.title }}</li>
      <li>Original Title: {{ movieDetails.original_title }}</li>
      <li>
        <img
          class="flag"
          :src="'/img/flags/' + movieDetails.original_language + '.png'"
          :alt="'Language: ' + movieDetails.original_language"
        />
      </li>
      <li>Vote: {{ Math.ceil(movieDetails.vote_average / 2) }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
.flag {
  width: 50px;
}
</style>
