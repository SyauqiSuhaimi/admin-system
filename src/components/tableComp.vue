<template class="overflow-x-auto">
    <div class="flex justify-between">
        <span class="text-lg font-bold">Top Product</span>
        <div class="join">
            <button class="btn bg-primary text-primary-content join-item btn-sm" @click="isTable = true">
                <span class="material-symbols-outlined text-right ">
                    table_chart
                </span>
            </button>
            <button class="btn bg-primary text-primary-content join-item btn-sm" @click="isTable = false;">
                <span class="material-symbols-outlined text-right">
                    pie_chart
                </span>
            </button>
        </div>
    </div>

    <table v-show="isTable" class="table rounded-lg">
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
                                <img :src="product.image" :alt="product.product_name"
                                    @error="setDefaultImage($event)" />
                            </div>
                        </div>
                        <div>
                            <div class="font-bold">{{ product.product_name }}</div>
                        </div>
                    </div>
                </td>
                <td>${{ product.price.toFixed(2) }}</td>
                <td>{{ product.amount }}</td>
                <td>${{ product.total_price }}</td>
                <td>
                    <span :class="{ 'text-green-500': product.stock > 0, 'text-red-500': product.stock === 0 }">
                        {{ product.stock > 0 ? product.stock : 'Out of Stock' }}
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    <div v-show="!isTable" id="piechart" class="h-full w-full"></div>
</template>
<script>
import * as echarts from 'echarts';
import { webSettings } from '@/stores/webSettings';
export default {
    name: 'tableComp',
    setup() {
        const setting = webSettings();
        return { setting };
    },
    data() {
        return {
            isTable: false,
            option: {
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            {
                                "value": 150,
                                "name": "Wireless Headphones"
                            },
                            {
                                "value": 250,
                                "name": "Gaming Mouse"
                            },
                            {
                                "value": 75,
                                "name": "Mechanical Keyboard"
                            },
                            {
                                "value": 120,
                                "name": "4K Monitor"
                            },
                            {
                                "value": 300,
                                "name": "USB-C Charging Cable"
                            }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            products: [
                {
                    "product_name": "Wireless Headphones",
                    "price": 99.99,
                    "amount": 150,
                    "total_price": "14,998.50",
                    "stock": 25,
                    "image": "https://hnsgsfp.imgix.net/9/images/detailed/102/Sonos-Ace-White-1.PNG?fit=fill&bg=0FFF&w=1536&h=900&auto=format,compress"
                },
                {
                    "product_name": "Gaming Mouse",
                    "price": 49.99,
                    "amount": 250,
                    "total_price": "12,497.50",
                    "stock": 0,
                    "image": "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-1.png?v=1"
                },
                {
                    "product_name": "Mechanical Keyboard",
                    "price": 129.99,
                    "amount": 75,
                    "total_price": "9,749.25",
                    "stock": 30,
                    "image": "https://keychron.ca/cdn/shop/products/Keychron-V3-Custom-Mechanical-Keyboard-knob-frosted-black-QMK-VIA-tenkeyless-hot-swappable-Keychron-K-Pro-switch-blue-V3-C2_1800x1800_e0395864-9468-453d-86d9-d0c7c84c4bd2.jpg?v=1665631206&width=1214"
                },
                {
                    "product_name": "4K Monitor",
                    "price": 299.99,
                    "amount": 120,
                    "total_price": "35,998.80",
                    "stock": 10,
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyl-Lm6LtezzHMe09Kq6m-JAgoI3uVrj2Iw&s"
                },
                {
                    "product_name": "USB-C Charging Cable",
                    "price": 19.99,
                    "amount": 300,
                    "total_price": "5,997.00",
                    "stock": 100,
                    "image": "https://i.ebayimg.com/images/g/SloAAOSwpMFmILkh/s-l1600.jpg"
                }
            ]
        }
    },
    methods: {
        initChart() {
            const chartDom = document.getElementById('piechart');
            if (this.chart) {
                this.onResize()
            } else {
                this.chart = echarts.init(chartDom);
                this.chart.setOption(this.option);
            }
        },
        onResize() {
            if (this.chart) {
                this.chart.resize();
            }
        },
    },
    watch: {
        'setting.isGridStackReady': function (newVal) {
            if (newVal) {
                this.initChart();

            }
        }
    },
    mounted() {
        if (this.setting.isGridStackReady) {
            this.initChart();
            this.setting.setGridStackReady(false);
        }
    },

}
</script>
<style></style>