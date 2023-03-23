const { createApp } = Vue;

const desc = {
  title: "hello",
  description: "first vue app",
  // imgSrc: "https://source.unsplash.com/200x200/?nature",
};

const cardDetails = [
  {
    id: "1",
    title: "Natural",
    // imgUrl: "https://source.unsplash.com/200x200/?nature",
  },
  {
    id: "2",
    title: "astronomy",
    // imgUrl: "https://source.unsplash.com/200x200/?astronomy",
  },
  {
    id: "3",
    title: "programming",
    // imgUrl: "https://source.unsplash.com/200x200/?programming",
  },
  {
    id: "4",
    title: "design",
    // imgUrl: "https://source.unsplash.com/200x200/?design",
  },
  {
    id: "5",
    title: "design",
    // imgUrl: "https://source.unsplash.com/200x200/?design",
  },
  {
    id: "6",
    title: "design",
    // imgUrl: "https://source.unsplash.com/200x200/?design",
  },
];

const app = createApp({
  data() {
    return {
      message: "Hello Vue!",
      desc: desc,
    };
  },
});

app.mount("#app");

const blog = createApp({
  data() {
    return {
      cards: cardDetails,
    };
  },
});

blog.mount("#blogs");

const blogCategory = createApp({
  data() {
    return {
      cards: cardDetails,
      status: "astronomy",
    };
  },
});

blogCategory.mount("#category");

const selectedCategory = createApp({
  data() {
    return {
      cards: cardDetails,
      status: "astronomy",
    };
  },
});

selectedCategory.mount("#select-category");

const getProducts = createApp({
  data() {
    return {
      products: null,
    };
  },
  // mounted() {
  //   fetch("https://dummyjson.com/products?limit=10")
  //     .then((res) => res.json())
  //     .then((res) => (this.products = res.products));
  // },
});

getProducts.mount("#products");

const addProducts = createApp({
  data() {
    return {
      products: null,
      limit: 1,
      cart: [],
    };
  },
  mounted() {
    fetch(`https://dummyjson.com/products?limit=10`)
      .then((res) => res.json())
      .then((res) => (this.products = res.products));
  },
  // note: will learn this later...
  // updated() {
  //   fetch(`https://dummyjson.com/products?limit=${this.limit}`)
  //     .then((res) => res.json())
  //     .then((res) => (this.products = res.products));
  // },
  methods: {
    moreProducts() {
      this.limit += 1;
    },
    addToCart(data) {
      this.cart.push(data);
      console.log(this.cart);
    },
  },
});

addProducts.mount("#add-products");
