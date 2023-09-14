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
      <li>Title: {{ movieDetails.title }}</li>
      <li>Original Title: {{ movieDetails.original_title }}</li>
      <li>
        <img :src="'/img/flags/' + movieDetails.original_language + '.png'" />
      </li>
      <li>Vote: {{ movieDetails.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
img {
  width: 50px;
}
</style>
