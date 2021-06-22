<template>
  <div>
    <ul>
        <li v-for="(item, index) in items" :key="index" :class="{'expanded': isExpanded}">
            <div>
                <i class="fa" :class="{'fa-folder-o': !isExpanded, 'fa-folder-open-o': isExpanded}" @click="isExpanded = !isExpanded"></i>&nbsp;
                <span>{{item.title}}</span>
            </div>
            <tree :items="item.children" v-if="item.children && isExpanded"></tree>
        </li>
    </ul>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Ref, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Tree extends Vue {
    @Prop() items: any[];

    isExpanded: boolean = false;
    selectedIndex: number = -1;

    select(index: number): void {
        this.selectedIndex = index;
        console.log('select');
    }
};

</script>

<style scoped lang="scss">
.tree-component ul li {
    padding: 0;
}

li {
    > div:first-child {
        padding: 10px 15px;
    }

    > div {
        padding-left: 15px;
    }
}
</style>