<template>
  <div>
    <div class="flex justify-between p-2">
      <div>
        <label for="start_date">Start Date</label>
        <input v-model="start" type="date" class="ml-4 p-2" />
      </div>
      <div>
        <label for="start_date">End Date</label>
        <input v-model="end" type="date" class="ml-4 p-2" />
      </div>
      <div class="flex items-center">

        <CustomSelect
          v-model="unit"
          label="Display"
          :data="[
            { label: 'Per Days', value: 'day' },
            { label: 'Per Month', value: 'month' },
            { label: 'Per Year', value: 'year' }
          ]"
        ></CustomSelect>
      </div>
    </div>
    <div id="planet-chart"></div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData, { inDateRange, leadingZero } from '../store/invoice'
import CustomSelect from './CustomSelect'

export default {
  name: 'DateRangeStats',
  components: { CustomSelect },
  props: {
    type: { type: String, default: 'bar' },
    label: { type: Array, required: true },
    datasets: { type: Array, required: true },
    date_key: { type: String, required: true, default: 'created_at' },
    start_date: String,
    end_date: String,
    bar_color: { type: String, default: '#3bc1af' },
    chart_unit: { type: String, default: 'day' },
    legend: {type:String, default:''}
  },
  data() {
    return {
      start: '',
      end: '',
      unit: ''
    }
  },
  computed: {
    date_data() {
      const results = {}
      const rarr = []
      let i
      this.datasets.forEach((data) => {
        const _date = new Date(data[this.date_key])
        let date = [_date.getFullYear()]

        if (this.unit === 'month' || this.unit === 'day') {
          date.push(_date.getMonth() + 1)
        }
        if (this.unit === 'day') {
          date.push(_date.getDate())
        }
        date = date.join('-')

        if (inDateRange(date, this.start, this.end, this.unit)) {
          results[date] = results[date] || 0
          results[date]++
        }
      })
      // you can always convert it into an array of objects, if you must
      for (i in results) {
        if (results.hasOwnProperty(i)) {
          rarr.push({ t: i, y: results[i] })
        }
      }

      return rarr
    }
  },
  watch: {
    date_data() {
      // watch it
      this.createChart('planet-chart')
    }
  },
  mounted() {
    this.createChart('planet-chart')
  },
  created() {
    const today = this.end_date || new Date()
    const lastYear =
      this.start_date ||
      new Date(new Date().setFullYear(today.getFullYear() - 2))
    this.end = [
      today.getFullYear(),
      leadingZero(today.getMonth() + 1),
      leadingZero(today.getDate())
    ].join('-')
    this.start = [
      lastYear.getFullYear(),
      leadingZero(lastYear.getMonth() + 1),
      leadingZero(lastYear.getDate())
    ].join('-')

    this.unit = this.chart_unit
  },
  methods: {
    createChart(chartId) {
      const ctx = document.getElementById(chartId)
      ctx.innerHTML = ''
      const canvas = document.createElement('canvas')
      ctx.appendChild(canvas)
      const myChart = new Chart(canvas, {
        type: this.type,

        data: {
          labels: [
            new Date(this.start).toLocaleString(),

            new Date(this.end).toLocaleString()
          ],
          datasets: [
            {
              label: this.legend,
              data: this.date_data,
              backgroundColor: Array(this.date_data.length).fill(
                this.bar_color
              ),
              borderWidth: 1
            }
          ]
        },
        options: {
          title: {
            display: false,
            text: `Batches statistics`
          },
          scales: {
            xAxes: [
              {
                type: 'time',
                distribution: 'series',
                time: {
                  unit: this.unit,
                  tooltipFormat: 'MMM D YYYY'
                },
                bounds: 'data'
              }
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  precision: 0,
                  padding: 25
                }
              }
            ]
          }
        }
      })
    }
  }
}
</script>

<style scoped></style>
