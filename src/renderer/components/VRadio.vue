<template>
  <div class="radio" role="radio" @click="$emit('check')">
    <div
      class="radio__circle"
      :class="{ 'radio__circle--checked': radios.includes(radio) }"
    ></div>
    <label class="radio__text">{{ text }}</label>
    <InfoIcon :desc="description" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import InfoIcon from './InfoIcon.vue';

  export default {
    name: 'VRadio',
    components: { InfoIcon },
    props: {
      radio: String,
      text: String,
      description: String,
    },
    computed: {
      ...mapState('radio', ['radios']),
    },
  };
</script>
