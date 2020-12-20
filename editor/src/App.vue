<template>
  <div id="app">
    <Default/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Default from './components/Default.vue';

@Component({
  components: {
    Default,
  },
})
export default class App extends Vue {
  constructor() {
    super();
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';

.selected {
  background-color: #007ACC;
}
</style>
