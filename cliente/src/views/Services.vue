<template>
  <div class="services">
    <ServicesComponent :servicesList="services" />
  </div>
</template>

<script>
import axios from "axios";

import ServicesComponent from "@/components/ServicesComponent.vue";

export default {
  name: "Services",
  components: {
    ServicesComponent,
  },
  data() {
    return {
      services: null,
    };
  },
  mounted() {
    this.getServices();
  },
  methods: {
    // getServices() {
    //   axios
    //     .get("http://localhost:3000/servicios/mostrarTodos")
    //     .then((result) => {
    //       this.services = result.data.Data;
    //       console.log(result.data.Data);
    //     })
    //     .catch((e) => console.log(e));
    // },
  },
};
</script>
