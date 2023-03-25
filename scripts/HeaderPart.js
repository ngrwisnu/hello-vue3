export default {
  props: {
    links: Array,
  },
  template: `
    <header class="d-flex justify-content-between align-items-center">
      <span>Vue3</span>
      <div class="nav-links">
        <ul class="d-flex justify-content-end">
          <li v-for="link in links">
            <a :href="link.href">{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </header>
    `,
};
