<template>
  <div class="mb-5 grid grid-cols-3 gap-5">
    <div class="card bg-base-100">
      <div class="card-body">
        <div class="grid grid-rows-2">
          <div class="grid grid-cols-2 justify-between">
            <span>Total Sales</span>
            <span class="text-right text-xs text-gray-500">Last 7 days</span>
          </div>
          <div class="grid grid-cols-2 justify-between">
            <h2 class="card-title">$23,780</h2>
            <span class="material-symbols-outlined text-right text-primary">
              shopping_cart
            </span>
          </div>

        </div>


      </div>
    </div>
    <div class="card bg-base-100">
      <div class="card-body">
        <div class="grid grid-rows-2">
          <div class="grid grid-cols-2 justify-between">
            <span>Total Customer</span>
            <span class="text-right text-xs text-gray-500">Last 7 days</span>
          </div>
          <div class="grid grid-cols-2 justify-between">
            <h2 class="card-title">4,321</h2>
            <span class="material-symbols-outlined text-right text-primary">
              group_add
            </span>
          </div>

        </div>


      </div>
    </div>
    <div class="card bg-base-100">
      <div class="card-body">
        <div class="grid grid-rows-2">
          <div class="grid grid-cols-2 justify-between">
            <span>Total Revenue</span>
            <span class="text-right text-xs text-gray-500">Last 30 days</span>
          </div>
          <div class="grid grid-cols-2 justify-between">
            <h2 class="card-title">$42,190</h2>
            <span class="material-symbols-outlined text-right text-primary">
              attach_money
            </span>
          </div>

        </div>


      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-5">
    <div class="card bg-base-100 p-5">
      <div id="line-chart" class="h-full w-full"></div>
    </div>
    <div class="overflow-x-auto rounded-lg bg-base-100 mb-5 p-5">
      <span class="text-lg font-bold">Top Product</span>
      <table class="table rounded-lg">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Product</th>
            <th>Price</th>
            <th>Amount Sale</th>
            <th>Total Sale</th>
            <th>Stock Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </td>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img :src="product.image" :alt="product.product_name" @error="setDefaultImage($event)" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ product.product_name }}</div>
                </div>
              </div>
            </td>
            <td>${{ product.price.toFixed(2) }}</td>
            <td>{{ product.amount }}</td>
            <td>${{ product.total_price.toFixed(2) }}</td>
            <td>
              <span :class="{ 'text-green-500': product.stock > 0, 'text-red-500': product.stock === 0 }">
                {{ product.stock > 0 ? product.stock : 'Out of Stock' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>


</template>
<script>
import { cloneDeep } from 'lodash';

import * as echarts from 'echarts';

export default {
  data() {
    return {
      products: [
        {
          "product_name": "Wireless Headphones",
          "price": 99.99,
          "amount": 150,
          "total_price": 14998.50,
          "stock": 25,
          "image": "https://hnsgsfp.imgix.net/9/images/detailed/102/Sonos-Ace-White-1.PNG?fit=fill&bg=0FFF&w=1536&h=900&auto=format,compress"
        },
        {
          "product_name": "Gaming Mouse",
          "price": 49.99,
          "amount": 250,
          "total_price": 12497.50,
          "stock": 0,
          "image": "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-1.png?v=1"
        },
        {
          "product_name": "Mechanical Keyboard",
          "price": 129.99,
          "amount": 75,
          "total_price": 9749.25,
          "stock": 30,
          "image": "https://keychron.ca/cdn/shop/products/Keychron-V3-Custom-Mechanical-Keyboard-knob-frosted-black-QMK-VIA-tenkeyless-hot-swappable-Keychron-K-Pro-switch-blue-V3-C2_1800x1800_e0395864-9468-453d-86d9-d0c7c84c4bd2.jpg?v=1665631206&width=1214"
        },
        {
          "product_name": "4K Monitor",
          "price": 299.99,
          "amount": 120,
          "total_price": 35998.80,
          "stock": 10,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyl-Lm6LtezzHMe09Kq6m-JAgoI3uVrj2Iw&s"
        },
        {
          "product_name": "USB-C Charging Cable",
          "price": 19.99,
          "amount": 300,
          "total_price": 5997.00,
          "stock": 100,
          "image": "https://i.ebayimg.com/images/g/SloAAOSwpMFmILkh/s-l1600.jpg"
        }
      ]
    }

  },
  methods: {
    initChart() {
      const chartDom = document.getElementById('line-chart');
      this.chart = echarts.init(chartDom);
      const option = {
        title: {
          text: 'Sales Overview (Last 7 days)',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Sales'],
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Sales',
            type: 'line',
            data: [3456, 2789, 4123, 1987, 3567, 2890, 2968],
          },
        ],
      };
      this.chart.setOption(option);
    },
  },

  mounted() {
    this.initChart();
  },

}
</script>
<style lang="">

</style>

<style src="@vueform/multiselect/themes/default.css"></style>