<template>
  <div class="servicesAdmin">
    <ServicesAdminComponent :servicesList="services"/>
  </div>
</template>

<script>
import axios from "axios";

import ServicesAdminComponent from "@/components/ServicesAdminComponent.vue";

export default {
  name: "ServicesAdmin",
  components: {
    ServicesAdminComponent,
  },
  data() {
    return {
      services: null,
      id: null
    };
  },
  mounted() {
    this.getServices();
  },
  methods: {
    getServices() {
      axios
        .get("http://localhost:3000/servicios/mostrarTodos")
        .then((result) => {
          this.services = result.data.Data;
          console.log(result.data.Data);
        })
        .catch((e) => console.log(e));
    }
  },
};
</script>
