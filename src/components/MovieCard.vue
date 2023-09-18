<script>
export default {
  props: {
    movieDetails: Object,
  },

  computed: {
    showPoster() {
      if (this.movieDetails.poster_path == null) {
        return "/img/no-poster.png";
      } else {
        const posterUrl = `https://image.tmdb.org/t/p/w342/${this.movieDetails.poster_path}`;
        return posterUrl;
      }
    },
  },
};
</script>

<template>
  <div class="col">
    <!-- card -->
    <div class="production-card">
      <!-- poster -->
      <div class="production-poster"><img :src="showPoster" /></div>
      <!-- info -->
      <div class="production-info">
        <ul>
          <!-- title -->
          <li>
            <span>Title: </span>
            {{ movieDetails.title }}
          </li>
          <!-- original title -->
          <li>
            <span>Original title: </span>
            {{ movieDetails.original_title }}
          </li>
          <!-- language -->
          <li>
            <span>Language: </span>
            <img
              class="flag"
              :src="'/img/flags/' + movieDetails.original_language + '.png'"
              :alt="'Language: ' + movieDetails.original_language"
            />
          </li>
          <!-- rating -->
          <li>
            <span>Rating: </span>
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
    </div>
  </div>
</template>

<style lang="scss"></style>
