<template lang="pug">
  .container
    p {{ text }}
    input(v-model="text")
    p Long DateTime: {{ $d(new Date(), 'long') }}
    p Short DateTime: {{ $d(new Date()) }}
    p Vuex localeStore counter: {{ counter }}
    button(@click.stop="counter++") Increment
    button(@click.stop="counter--") decrement
    button(@click.stop="delCounter") Delete
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { State } from '@/store/modules/global'
import * as types from '@/store/mutation-types'

const globalModule = namespace('global')

@Component
export default class Index extends Vue {
  text: string | null = 'HelloWorld!'

  @globalModule.State((state: State) => state.counter) _counter!: number
  @globalModule.Mutation(types.SET_COUNTER) setCounter!: (counter: number) => void
  @globalModule.Mutation(types.DEL_COUNTER) delCounter!: () => void

  get counter (): number { return this._counter }
  set counter (val: number) { this.setCounter(val) }
}
</script>
