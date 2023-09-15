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
      <li>
        Rating:
        <!-- full stars -->
        <font-awesome-icon
          v-for="i in Math.ceil(movieDetails.vote_average / 2)"
          icon="fa-solid fa-star"
          class="full-star"
        />

        <!-- empty stars -->
        <font-awesome-icon
          v-for="i in 5 - Math.ceil(movieDetails.vote_average / 2)"
          icon="fa-regular fa-star"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.full-star {
  color: gold;
}

.flag {
  width: 50px;
}
</style>
