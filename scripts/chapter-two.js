const { createApp } = Vue;

const parsedText = createApp({
  data() {
    return {
      value: "Here is the <b>example</b> text.",
    };
  },
});

parsedText.mount("#parsed-text");
