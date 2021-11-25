<template>
  <div class="BookedComponent">
    <b-container>
      <b-row align-v="center">
        <b-col class="bv-example-row" v-for="book in getBookedList" :key="book.title" md="3">
          <b-card tag="book" style="max-width: 20rem" class="mb-2" footer="Book">
            <h1>{{ book.title }}</h1>
            <b-card-text>
              {{ book.description }} <br />
              {{ book.date }}
            </b-card-text>
            <b-button variant="primary">Hola</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <button type="button" class="btn btn-dark margen" v-on:click="regresar()">
          Salir
        </button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BookedComponent",
  props: {
    bookList: null,
  },
  computed: {
    ...mapGetters("booked", ["getBookedList"]),
  },
  methods: {
    regresar() {
      this.$router.push("/servicesAdmin");
    },
    async getBooked() {
      const bookedList = this.$store.getters["booked/getBookedList"];

      if (bookedList && bookedList.length == 0) {
        await this.$store.dispatch("booked/getBooked");
      }
    },
  },
  created() {
    this.getBooked();
  },
};
</script>
