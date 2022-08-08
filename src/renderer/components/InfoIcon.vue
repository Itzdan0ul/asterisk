<template>
  <div class="info-icon" :title="desc">
    <InlineSvg src="assets/images/info.svg" />
  </div>
</template>

<script>
  import InlineSvg from 'vue-inline-svg';

  export default {
    name: 'InfoIcon',
    components: {
      InlineSvg,
    },
    props: {
      desc: String,
    },
  };
</script>
