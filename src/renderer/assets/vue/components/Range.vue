<template>
  <div class="main__range-option">
    <div class="main__range">
      <span>Password length: {{ count }}</span>
      <input id="input-range" class="input range main__input--range" type="range" min="1" max="50" step="1" v-model="range" @change="generatePassword()">
    </div>
  </div>
</template>

<script>
  import { store } from '../store/index.js'
  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'Range',
    methods: {
      generatePassword() {
        const payload = {
          radioGroup: [...this.radioGroup],
          checkboxGroup: [...this.checkboxGroup],
          count: parseInt(this.count)
        }
        
        if (this.checkboxGroup.length > 0) {
          console.log('Mo?')
          this.setLevel(payload)
        } else {
          payload.count = 0
          this.setLevel(payload)
        }

        this.getPassword(payload)
      },
      ...mapMutations('semaphore', { setLevel: 'SET_LEVEL' }),
      ...mapActions('passwordBuilder', ['getPassword'])
    },
    computed: {
      range: {
        get() { return this.count },
        set(value) { store.commit('range/SET_RANGE', value) }
      },
      ...mapState('range', ['count']),
      ...mapState('radio', ['radioGroup']),
      ...mapState('checkbox', ['checkboxGroup'])
    }
  }
</script>