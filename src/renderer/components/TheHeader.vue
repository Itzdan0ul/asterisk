<template>
  <header class="header">
    <Menu />
  </header>
</template>

<script>
  import Menu from './Menu.vue';

  export default {
    name: 'TheHeader',
    components: {
      Menu,
    },
  };
</script>
