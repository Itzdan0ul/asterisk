<template>
  <input
    id="range"
    class="range"
    type="range"
    min="1"
    max="50"
    step="1"
    v-model="range"
    @change="$emit('change')"
  />
</template>

<script>
  import { mapState } from 'vuex';
  import { store } from '../store';

  export default {
    name: 'Range',
    computed: {
      range: {
        get() {
          return this.count;
        },
        set(value) {
          store.commit('range/SET_RANGE', value);
        },
      },
      ...mapState('range', ['count']),
    },
  };
</script>
