<script>
export default {
  data() {
    return {
      searchedTerm: "",
    };
  },

  emits: ["search-submit"],
};
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
        <img src="img\netflix-logo.png" alt="Netflix Logo" />
      </div>
      <!-- search bar -->
      <form
        class="d-flex align-items-center"
        @submit.prevent="$emit('search-submit', searchedTerm)"
      >
        <!-- input -->
        <input
          type="text"
          class="form-control"
          placeholder="Enter a title..."
          v-model="searchedTerm"
        />
        <!-- button -->
        <button type="submit" class="btn btn-primary">Search</button>
      </form>
    </div>
  </header>
</template>

<style lang="scss">
header {
  background-color: #1b1b1b;
  padding: 1rem 0;

  .logo img {
    width: 150px;
  }
}

.btn.btn-primary {
  background-color: #e40813;
  border: 1px solid #e40813;
}
</style>
