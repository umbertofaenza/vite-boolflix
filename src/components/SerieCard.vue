<script>
export default {
  props: {
    serieDetails: Object,
  },
};
</script>

<template>
  <div class="col">
    <!-- card -->
    <div class="production-card">
      <!-- poster -->
      <div class="production-poster">
        <img
          :src="'https://image.tmdb.org/t/p/w342/' + serieDetails.poster_path"
        />
      </div>
      <!-- info -->
      <div class="production-info">
        <ul>
          <!-- title -->
          <li>
            <span>Title: </span>
            {{ serieDetails.name }}
          </li>
          <!-- original title -->
          <li>
            <span>Original title: </span>
            {{ serieDetails.original_name }}
          </li>
          <!-- language (flag) -->
          <li>
            <span>Language: </span>
            <img
              class="flag"
              :src="'/img/flags/' + serieDetails.original_language + '.png'"
              :alt="'Language: ' + serieDetails.original_language"
            />
          </li>
          <!-- rating -->
          <li>
            <span>Rating: </span>
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
    </div>
  </div>
</template>

<style lang="scss"></style>
