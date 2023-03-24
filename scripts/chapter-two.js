const { createApp } = Vue;

const parsedText = createApp({
  data() {
    return {
      value: "Here is the <b>example</b> text.",
    };
  },
});

parsedText.mount("#parsed-text");

const computedProp = createApp({
  data() {
    return {
      placeholder: "Slug for this page",
      count: 1,
    };
  },
  computed: {
    computedTitle() {
      return this.placeholder.toLowerCase().replace(/\s/g, "-");
    },
    counterFromComputed() {
      return this.count === 1 ? 1 : this.count * 10;
    },
  },
  methods: {
    counterFromMethod() {
      return +new Date();
    },
    increment() {
      this.count += 1;
    },
  },
});

computedProp.mount("#computed-section");
