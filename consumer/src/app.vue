<template>
  <myButton></myButton>
</template>
<script>
import { defineAsyncComponent, onMounted } from "vue";

const myButton = defineAsyncComponent(() => import("main/myButton"));
import getModuleList from "./utils/index";
export default {
  name: "consumer",
  components: {
    myButton: myButton,
  },
  setup() {
    onMounted(async () => {
      const list = await getModuleList();
      console.log(list("999", "1"));
    });
  },
  async onMounted() {},
};
</script>
