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
    </div>
    <div :id="id"></div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import { inDateRange, leadingZero } from '../store/invoice'
import CustomSelect from './CustomSelect'

export default {
  name: 'DataChart',
  components: { CustomSelect },
  props: {
    type: { type: String, default: 'bar' },
    label: { type: Array, required: true },
    label_ids: { type: Array },
    label_key: { type: String, required: true },
    datasets: { type: Array, required: true },
    count_key: { type: String, required: false },
    date_key: { type: String, required: true, default: 'created_at' },
    start_date: String,
    end_date: String,
    bar_color: { type: String, default: '#3bc1af' },
    bar_colors: { type: Array },
    legend: { type: String, default: '' }
  },
  data() {
    return {
      start: '',
      end: '',
      unit: 'day',
      id: new Date().getTime().toString()
    }
  },
  computed: {
    date_data() {
      const results = {}
      const rarr = []
      const keyLoop = Array.from(this.label_ids || this.label)
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
          results[data[this.label_key]] = results[data[this.label_key]] || 0
          results[data[this.label_key]]++
        }
      })
      // you can always convert it into an array of objects, if you must
      keyLoop.forEach((key) => rarr.push(results[key] || 0))

      return rarr
    }
  },
  watch: {
    date_data() {
      // watch it
      this.createChart(this.id)
    }
  },
  mounted() {
    this.createChart(this.id)
  },
  created() {
    const today = this.end_date ? new Date(this.end_date) : new Date()
    const lastYear = this.start_date
      ? new Date(this.start_date)
      : new Date(new Date().setFullYear(today.getFullYear() - 2))
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
          labels: this.label,
          datasets: [
            {
              label: this.legend,
              data: this.date_data,
              backgroundColor:
                this.bar_colors ||
                Array(this.date_data.length).fill(this.bar_color),
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
