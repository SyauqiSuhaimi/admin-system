<template>
    <div id="line-chart" class="h-full w-full"></div>
</template>
<script>
import * as echarts from 'echarts';
import { webSettings } from '@/stores/webSettings';
export default {
    name: 'chartComp',
    setup() {
        const setting = webSettings();
        return { setting };
    },
    methods: {
        initChart() {
            const chartDom = document.getElementById('line-chart');
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

            if (this.chart) {
                this.onResize()
            } else {
                this.chart = echarts.init(chartDom);
                this.chart.setOption(option);
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