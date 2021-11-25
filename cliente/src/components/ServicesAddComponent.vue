<template>
  <div class="ServicesAddComponent">
    <div class="container">
      <form action="" class="form-horizontal">
        <div class="form-group left"> <br>
          <label for="" class="control-label col-sm-2">Nombre del servicio</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="title"
              id="title"
              v-model="form.title"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm">Descripción</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="description"
              id="description"
              v-model="form.description"
            />
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Encargado</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="manager"
                id="manager"
                v-model="form.manager"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary" v-on:click="guardar()">
            Guardar
          </button>
          <button type="button" class="btn btn-dark margen" v-on:click="salir()">
            Atrás
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ServicesAddComponent",
  props: {},
  data: function () {
    return {
      form: {
        title: "",
        description: "",
        manager: "",
      },
    };
  },
  methods: {
    guardar() {
      //   this.form.token = localStorage.getItem("token");
      axios
        .post("http://localhost:3000/servicios/agregar", this.form)
        .then((data) => {
          console.log(data);
          this.makeToast("Hecho", "Servicio agregado", "success");
          this.$router.push("/servicesAdmin");
        })
        .catch((e) => {
          console.log(e);
          this.makeToast("Error", "Error al guardar", "error");
        });
    },
    salir() {
      this.$router.push("/servicesAdmin");
    },
    makeToast(titulo, texto, tipo) {
      this.toastCount++;
      this.$bvToast.toast(texto, {
        title: titulo,
        variant: tipo,
        autoHideDelay: 5000,
        appendToast: true,
      });
    },
  },
};
</script>

<style scoped>
.left {
  text-align: left;
}
</style>
