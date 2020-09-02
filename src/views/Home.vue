<template>
  <div class="home">
    <IndexWrap msg="我是Theo vue-cli 4.0" />
  </div>
</template>

<script>
// @ is an alias to /src
import IndexWrap from "@/components/IndexWrap.vue";

export default {
  name: "Home",
  components: {
    IndexWrap
  }
};
</script>
