<template>
  <div class="checkbox" role="checkbox" @click="$emit('check')">
    <div
      class="checkbox__square"
      :class="{ 'checkbox__square--checked': checkboxes.includes(checkbox) }"
    ></div>
    <label class="checkbox__text">{{ text }}</label>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'VCheckbox',
    props: {
      text: String,
      checkbox: String,
      disabled: Boolean,
    },
    computed: {
      ...mapState('checkbox', ['checkboxes']),
    },
  };
</script>
