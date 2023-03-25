const { createApp } = Vue;
import HeaderPart from "./HeaderPart.js";

const header = createApp({
  components: {
    HeaderPart,
  },
  data() {
    return {
      chapterOne: [
        { title: "Chapter 1", href: "#" },
        { title: "Chapter 2", href: "../pages/chapter-two.html" },
        { title: "Chapter 3", href: "../pages/chapter-three.html" },
      ],
      chapterTwo: [
        { title: "Chapter 1", href: "../index.html" },
        { title: "Chapter 2", href: "#" },
        { title: "Chapter 3", href: "../pages/chapter-three.html" },
      ],
      chapterThree: [
        { title: "Chapter 1", href: "../index.html" },
        { title: "Chapter 2", href: "../pages/chapter-two.html" },
        { title: "Chapter 3", href: "#" },
      ],
    };
  },
});
header.mount("#header");
