<script>
export default {
  props: {
    serieDetails: Object,
  },
};
</script>

<template>
  <div class="col">
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
      <li>
        Rating:
        <!-- full stars -->
        <font-awesome-icon
          v-for="i in Math.ceil(serieDetails.vote_average / 2)"
          icon="fa-solid fa-star"
          class="full-star"
        />

        <!-- empty stars -->
        <font-awesome-icon
          v-for="i in 5 - Math.ceil(serieDetails.vote_average / 2)"
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
