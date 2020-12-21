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

.scene-editor-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px; 
  background-color: #181818; 
  border-bottom: 1px solid black;
  height: 30px;

  .title {
    font-weight: bold; 
    color: #e7e7e7;
  }

  .actions {
    display: flex;

    button {
      background-color: transparent;
      color: #ffffff;
      cursor: pointer;
    }
  }
}
</style>
