<template>
  <div class="booked">
    <BookedComponent :bookList="books" />
  </div>
</template>

<script>
import axios from "axios";

import BookedComponent from "@/components/BookedComponent.vue";

export default {
  name: "Services",
  components: {
    BookedComponent,
  },
  data() {
    return {
      books: null,
    };
  },
  mounted() {
    this.getBooked();
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
