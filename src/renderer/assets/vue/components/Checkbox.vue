<template>
  <div class="main__checkbox" v-for="checkBox in checkBoxes" :key="checkBox" @click="changeCheckboxState(checkBox)">
    <div class="input main__input--checkbox" :class="{ 'checked-checkbox': checkboxGroup.includes(checkBox) }" role="checkbox"></div>
    <label>{{ checkBox.replace(checkBox.charAt(0), checkBox.charAt(0).toUpperCase()) }}</label>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'Checkbox',
    data() {
      return {
        checkBoxes: [
          'uppercase',
          'lowercase',
          'numbers',
          'ascii',
          'symbols',
          'emoji'
        ]
      }
    },
    methods: { ...mapMutations('checkbox', { changeCheckboxState: 'CHANGE_CHECKBOX_STATE' }) },
    computed: { ...mapState('checkbox', ['checkboxGroup']) }
  }
</script>