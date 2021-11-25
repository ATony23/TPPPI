<template>
  <div class="book">
    <BookComponent />
  </div>
</template>

<script>
import axios from "axios";

import BookComponent from "@/components/BookComponent.vue";

export default {
  name: "Book",
  components: {
    BookComponent,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    getBooked() {
      axios
        .get("http://localhost:3000/citas/mostrarTodas")
        .then((result) => {
          this.books = result.data.Data;
          console.log(result.data.Data);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
