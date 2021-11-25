<template>
  <div class="ServicesComponent">
    <b-container>
      <div>
        <b-button variant="primary" v-on:click="cerrarSesion">Cerrar sesión</b-button>
      </div>
    </b-container> <br>
    <b-container>
      <b-row align-v="center">
        <b-col
          class="bv-example-row"
          v-for="service in servicesList"
          :key="service.title"
          md="3"
        >
          <b-card tag="service" style="max-width: 20rem" class="mb-2" footer="Servicio">
            <h1>{{ service.title }}</h1>
            <b-card-text>
              {{ service.description }} <br />
              {{ service.manager }}
            </b-card-text> 
            <b-button variant="primary" v-on:click="book">Agendar cita</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "ServicesComponent",
  props: {
    servicesList: null
  },
  // computed: {
  //   ...mapGetters('services', ['getServicesList'])
  // },
  methods: {
    book() {
      this.$router.push("Book");
    },
    cerrarSesion() {
      this.$router.push("/");
    },
    // async getServices() {

    //   const servicesList = this.$store.getters["services/getServicesList"];

    //   if (servicesList && servicesList.length == 0 ) {
    //     await this.$store.dispatch('services/getServices');
    //   }
    // }
  },
  // created() {
  //   this.getServices()
  // }
};
</script>
