<template>
  <div class="BookComponent">
    <div class="container">
      <form action="" class="form-horizontal">
        <div class="form-group left"> <br>
          <label for="" class="control-label col-sm-2">Nombre de la cita</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="nombre"
              id="nombre"
              v-model="form.title"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm">Servicio</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="descripcion"
              id="descripcion"
              v-model="form.description"
            />
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Fecha</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="fecha"
                id="fecha"
                v-model="form.date"
              />
            </div>
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-2">Hora</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="hora"
                id="hora"
                v-model="form.time"
              />
            </div>
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-2">Aplicante</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="aplicante"
                id="aplicante"
                v-model="form.applicant"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <button type="button" class="btn btn-primary" v-on:click="guardar()">
            Guardar
          </button>
          <button type="button" class="btn btn-dark margen" v-on:click="salir()">
            Salir
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BookComponent",
  props: {},
  data: function () {
    return {
      form: {
        title: "",
        description: "",
        date: "",
        time: "",
        applicant: "",
      },
    };
  },
  methods: {
    guardar() {
    //   this.form.token = localStorage.getItem("token");
      axios
        .post("http://localhost:3000/citas/agregar", this.form)
        .then((data) => {
          console.log(data);
          this.makeToast("Hecho", "Cita agendada", "success");
          this.$router.push("/services");
        })
        .catch((e) => {
          console.log(e);
          this.makeToast("Error", "Error al guardar", "error");
        });
    },
    salir() {
      this.$router.push("/services");
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
