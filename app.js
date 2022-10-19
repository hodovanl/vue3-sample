import MyComponent1 from "./MyComponent1.js";
import MyComponent2 from "./MyComponent2.js";

const app = Vue.createApp({
  components: {
    MyComponent1,
    MyComponent2,
  },
});
app.mount("#app");
