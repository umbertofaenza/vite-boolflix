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
  <div class="container mt-3">
    <!-- search bar -->
    <form
      class="row g-3"
      @submit.prevent="$emit('search-submit', searchedTerm)"
    >
      <div class="col-auto">
        <!-- input -->
        <input
          type="text"
          class="form-control"
          placeholder="Enter a title..."
          v-model="searchedTerm"
        />
      </div>
      <div class="col-auto">
        <!-- button -->
        <button type="submit" class="btn btn-primary mb-3">Search</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss"></style>
