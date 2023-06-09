const { createApp } = Vue;
import TodoItem from "./TodoItem.js";

const main = createApp({
  components: {
    TodoItem,
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
});
main.mount("#main");
