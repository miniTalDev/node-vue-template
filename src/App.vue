<template lang="pug">
  router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'app'
})
export default class App extends Vue {
}
</script>
