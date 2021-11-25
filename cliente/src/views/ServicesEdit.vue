<template>
  <div class="servicesAdmin">
    <ServicesEdit/>
  </div>
</template>

<script>
import ServicesEdit from "@/components/ServicesEdit.vue";

export default {
  name: "ServicesAdd",
  components: {
    ServicesEdit,
  },
  data: function () {
    return {
      form1: {
        id: "",
      },
      form: {
        title: "",
        description: "",
        manager: "",
      },
    };
  },
  mounted() {},
};
</script>

<style scoped>
.left {
  text-align: left;
}
</style>
