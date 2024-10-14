<template>
  <div><button class="btn" @click="editGridItem">Edit</button></div>
  <div>
    <div class="grid-stack">
      <div v-for="(item, index) in gridItems" :key="index" class="grid-stack-item" style="padding: 0.5rem!important;"
        :gs-w="item.width" :gs-h="item.height" :gs-no-move="editGrid" :gs-no-resize="editGrid">
        <div v-if="!editGrid" class="card bg-base-100 h-full p-5 overflow-auto">
          <component :is="item.component" v-bind="item.props"></component>
        </div>
        <div v-else class="card bg-base-100 h-full p-5 overflow-auto">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { cloneDeep } from 'lodash';
import tableComp from '@/components/tableComp.vue';
import chartComp from '@/components/chartComp.vue';
import statComp from '@/components/statComp.vue';
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { webSettings } from '@/stores/webSettings';

export default {
  setup() {
    const setting = webSettings();

    return { setting };
  },
  components: {
    tableComp, chartComp, statComp
  },
  data() {
    return {
      loading: true,
      editGrid: false,
      gridItems: [
        { width: 4, height: 1, component: 'statComp', props: { title: "Total Sales", subtitle: "Last 7 days", amount: "$23,780", icon: "shopping_cart" } },
        { width: 4, height: 1, component: 'statComp', props: { title: "Total Customer", subtitle: "Last 7 days", amount: "4,321", icon: "group_add" } },
        { width: 4, height: 1, component: 'statComp', props: { title: "Total Revenue", subtitle: "Last 30 days", amount: "$42,190", icon: "attach_money" } },
        { width: 6, height: 4, component: 'tableComp' },
        { width: 6, height: 4, component: 'chartComp', noResize: true, locked: true, }
      ]
    };
  },
  mounted() {
    this.grid = GridStack.init();
    this.setting.setGridStackReady(true);
  },
  methods: {
    addGridItem() {
      this.gridItems.push({
        width: 4,
        height: 1,
        component: 'statComp',
        props: { title: "New Stat", subtitle: "New Subtitle", amount: "0", icon: "new_releases" }
      });
      console.log(this.gridItems);
    },
    removeGridItem(index) {
      this.gridItems.splice(0, 1);
    },
    editGridItem() {
      this.editGrid = !this.editGrid;
      if (this.grid) {
        this.grid.destroy(false);
        this.grid = GridStack.init();
      }
      if (this.editGrid) {
        this.setting.setGridStackReady(true);
      }
    }
  },
  beforeUnmount() {
    if (this.grid) {
      this.grid.destroy(false);
    }
  }

}
</script>

<style>
.grid-stack-item-content {
  background-color: #ffffff;
  border: 1px solid #c4a9a900;

}

.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m:
    conic-gradient(#0000 10%, #000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}

@keyframes l3 {
  to {
    transform: rotate(1turn)
  }
}
</style>
