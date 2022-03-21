<template>
  <div class="main__checkbox" @click="changeCheckboxState('uppercase')">
    <div class="input main__input--checkbox" :class="{ 'checked-checkbox': checkboxGroup.includes('uppercase') }" role="checkbox"></div>
    <label for="uppercase-checkbox">Uppercase</label>
  </div>
  <div class="main__checkbox" @click="changeCheckboxState('lowercase')">
    <div class="input main__input--checkbox" :class="{ 'checked-checkbox': checkboxGroup.includes('lowercase') }" role="checkbox"></div>
    <label for="lowercase-checkbox">Lowercase</label>
  </div>
  <div class="main__checkbox" @click="changeCheckboxState('numbers')">
    <div class="input main__input--checkbox" :class="{ 'checked-checkbox': checkboxGroup.includes('numbers') }" role="checkbox"></div>
    <label for="number-checkbox">Numbers</label>
  </div>
  <div class="main__checkbox" @click="changeCheckboxState('ascii')">
    <div class="input main__input--checkbox" :class="{ 'checked-checkbox': checkboxGroup.includes('ascii') }" role="checkbox">
    </div>
    <label for="ascii-checkbox">ASCII</label>
  </div>
  <div class="main__checkbox" @click="changeCheckboxState('symbols')">
    <div class="input main__input--checkbox" :class="{ 'checked-checkbox': checkboxGroup.includes('symbols') }" role="checkbox">
    </div>
    <label for="symbols-checkbox">Symbols</label>
  </div >
  <div class="main__checkbox" @click="changeCheckboxState('emoji')">
    <div class="input main__input--checkbox" :class="{ 'checked-checkbox': checkboxGroup.includes('emoji') }" role="radio"></div>
    <label for="emoji-checkbox">Emoji</label>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'Checkbox',
    methods: { ...mapMutations('checkbox', { changeCheckboxState: 'CHANGE_CHECKBOX_STATE' }) },
    computed: { ...mapState('checkbox', ['checkboxGroup']) }
  }
</script>