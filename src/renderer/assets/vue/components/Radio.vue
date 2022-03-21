<template>
  <div class="main__radio" @click="changeRadioState('say-radio')">
    <div class="input main__input--radio" :class="{ 'checked-radio': radioGroup.includes('say-radio') }" role="radio"></div>
    <label for="say-radio">Easy to say</label>
    <span title="Avoid numbers and special characters">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 1.25C4.53977 1.25 4.16667 1.6231 4.16667 2.08333C4.16667 2.54357 4.53977 2.91667 5 2.91667C5.46024 2.91667 5.83334 2.54357 5.83334 2.08333C5.83334 1.6231 5.46024 1.25 5 1.25Z" fill="white"/>
        <path d="M5.83334 8.75H4.16667L4.16667 3.75H5.83334L5.83334 8.75Z" fill="white"/>
      </svg>
    </span>
  </div>
  <div class="main__radio" @click="changeRadioState('read-radio')">
    <div class="input main__input--radio" :class="{ 'checked-radio': radioGroup.includes('read-radio') }" role="radio"></div>
    <label for="read-radio">Easy to read</label>
    <span title="Avoid ambiguous characters such as '1', '0', 'O' and 'l'.">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 1.25C4.53977 1.25 4.16667 1.6231 4.16667 2.08333C4.16667 2.54357 4.53977 2.91667 5 2.91667C5.46024 2.91667 5.83334 2.54357 5.83334 2.08333C5.83334 1.6231 5.46024 1.25 5 1.25Z" fill="white"/>
        <path d="M5.83334 8.75H4.16667L4.16667 3.75H5.83334L5.83334 8.75Z" fill="white"/>
      </svg>
    </span>
  </div>
  <div class="main__radio" @click="changeRadioState('all-radio')">
    <div id="all-radio" class="input main__input--radio" :class="{ 'checked-radio': radioGroup.includes('all-radio') }" role="radio"></div>
    <label for="all-radio">All characters</label>
    <span title="Any character, except ASCII and emoji.">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 1.25C4.53977 1.25 4.16667 1.6231 4.16667 2.08333C4.16667 2.54357 4.53977 2.91667 5 2.91667C5.46024 2.91667 5.83334 2.54357 5.83334 2.08333C5.83334 1.6231 5.46024 1.25 5 1.25Z" fill="white"/>
        <path d="M5.83334 8.75H4.16667L4.16667 3.75H5.83334L5.83334 8.75Z" fill="white"/>
      </svg>
    </span>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'Radio',
    methods: { ...mapMutations('radio', { changeRadioState: 'CHANGE_RADIO_STATE' }) },
    computed: { ...mapState('radio', ['radioGroup']) }
  }
</script>