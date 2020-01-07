<template lang="pug">
  .container
    p {{ text }}
    input(v-model="text")
    button(@click.stop="submit") Submit
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  text: string | null = 'HelloWorld!'

  submit (evt: Event) {
    evt.preventDefault()
    if (this.text) {
      alert(this.text)
    }
  }
}
</script>
