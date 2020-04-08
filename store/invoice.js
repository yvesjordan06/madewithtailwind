export class Invoice {
  constructor({
    delivery,
    exporter,
    stockage,
    vessel,
    invoice_date,
    invoice_no,
    invoice_info,
    batches,
    created_on
  }) {
    console.log('I got this batches')
    console.log(batches)
    this.delivery = delivery || ''
    this.exporter = exporter || ''
    this.stockage = stockage || ''
    this.vessel = vessel || ''
    this.invoice_date = invoice_date
    this.invoice_no = invoice_no
    this.created_on = created_on || formatDate(new Date())
    this.description = batches.length.toString() + ' batches'
    this.invoice_info = invoice_info || {
      delivery,
      exporter,
      stockage,
      vessel,
      invoice_date,
      invoice_no
    }
    this.batches = batches.map((x) => {
      const batch = new Batch(x)

      batch.total = batch.quantity * batch.num_of_ships
      return batch
    })
  }
}

export class Batch {
  constructor({
    description,
    batch_no,
    quantity,
    num_of_ships,
    mfg_date,
    exp_date,
    invoice_no,
    region,
    distribution_date,
    created_at
  }) {
    this.description = description
    this.batch_no = batch_no
    this.quantity = quantity
    this.num_of_ships = num_of_ships
    this.mfg_date = mfg_date
    this.exp_date = exp_date
    this.invoice_no = invoice_no
    this.region = region
    this.distribution_date = distribution_date
    this.created_at = created_at
  }
}
export const state = () => ({
  invoices: [],
  regions: [
    { name: 'Overview', code: '' },
    { name: 'adamawa', code: 'ADA', color: '#4ab21e' },
    { name: 'center', code: 'CEN', color: '#cca21e' },
    { name: 'east', code: 'EST', color: '#a1a21e' },
    { name: 'far north', code: 'FND', color: '#b3321e' },
    { name: 'litoral', code: 'LIT', color: '#ffc21f' },
    { name: 'north', code: 'NRD', color: '#3fc21e' },
    { name: 'north west', code: 'NDW', color: '#defc2e' },
    { name: 'south', code: 'STH', color: '#eec2ee' },
    { name: 'south west', code: 'STW', color: '#3fc21e' },
    { name: 'west', code: 'WST', color: '#ddd21e' }
  ]
})

export const mutations = {
  reload(state, invoices) {
    state.invoices = []
    invoices.forEach((invoice) => state.invoices.push(invoice))
  },

  clear(state) {
    state.invoices = []
  },

  add(state, invoice) {
    state.invoices.push(invoice)
  },
  updateInvoice(state, updatedInvoice) {
    const invoice = state.invoices.indexOf(
      (i) => i.invoice_no === updatedInvoice.invoice_no
    )
    state.invoices[invoice] = { ...state.invoices[invoice], ...updatedInvoice }
  },
  updateBatch(state, updatedBatch) {
    const invoice_index = state.invoices.indexOf((invoice) =>
      invoice.batches.includes(
        (_batch) => _batch.batch_no === updatedBatch.batch_no
      )
    )
    const batch = state.invoices[invoice_index].batches.indexOf(
      (_batch) => _batch.batch_no === updatedBatch.batch_no
    )
    state.invoices[invoice_index].batches[batch] = {
      ...state.invoices[invoice_index].batches[batch],
      ...updatedBatch
    }
  },
  addDistribution(state, { region_code, batch_no }) {
    const invoice_search = state.invoices.find(
      (invoice) =>
        !!invoice.batches.find((_batch) => _batch.batch_no === batch_no)
    )
    const batch = invoice_search.batches.find(
      (_batch) => _batch.batch_no === batch_no
    )
    batch.region = region_code
    batch.distribution_date = formatDate(new Date())
  },
  remove(state, invoice) {
    state.invoices.splice(state.list.indexOf(invoice), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}

export const getters = {
  allBatches: (state) => {
    const batches = []
    state.invoices.forEach((invoice) => batches.push(...invoice.batches))
    return batches.map((x) => ({ ...x, region_full: state.regions.find(y => y.code === x.region)?.name.toUpperCase(), status: x.region ? 'Distributed' : 'Pending' }))
  },
  getInvoice: (state) => (id) => {
    console.log(id)
    return state.invoices.find((invoice) => invoice.invoice_no === id)
  },
  getRegion: (state) => (code) => {
    return state.regions.find((region) => region.code === code)
  },
  getBatch: (_, getters) => (id) => {
    return getters.allBatches.find((batch) => batch.batch_no === id)
  },
  getBatchForRegion: (_, getters) => (region) => {
    return getters.allBatches.filter((batch) => batch.region === region)
  },
  getDistributions: (state, getters) => {
    return getters.allBatches
      .filter((batch) => !!batch.distribution_date)

  }
}

export const convertToDate = function(date) {
  const _date = new Date(date)
  return (
    _date.getMonth() +
    '/' +
    _date.getDate() +
    '/' +
    _date
      .getFullYear()
      .toString()
      .slice(2)
  )
}

export const leadingZero = function(number) {
  const s = number.toString()

  if (s.length === 1) {
    return '0' + s
  }
  return s
}

export const formatDate = function(date) {
  const newDate = new Date(date)
  return [
    newDate.getFullYear(),
    leadingZero(newDate.getMonth() + 1),
    leadingZero(newDate.getDate())
  ].join('-')
}

export const inDateRange = function(
  _currentDate,
  _minDate,
  _maxDate,
  unit = 'day'
) {
  let currentDate = new Date(_currentDate)
  let minDate = new Date(_minDate)
  let maxDate = new Date(_maxDate)

  if (unit === 'month') {
    minDate = new Date(
      [minDate.getFullYear(), minDate.getMonth() + 1].join('-')
    )
    maxDate = new Date(
      [maxDate.getFullYear(), maxDate.getMonth() + 1].join('-')
    )
    currentDate = new Date(
      [currentDate.getFullYear(), currentDate.getMonth() + 1].join('-')
    )
  } else if (unit === 'year') {
    minDate = new Date(minDate.getFullYear())
    maxDate = new Date(maxDate.getFullYear())
    currentDate = new Date(currentDate.getFullYear())
  }

  if (currentDate >= minDate && currentDate <= maxDate) {
    return true
  }
  return false
}

export const planetChartData = {
  type: 'pie',
  data: {
    labels: [
      'Mercury',
      'Venus',
      'Earth',
      'Mars',
      'Jupiter',
      'Saturn',
      'Uranus',
      'Neptune'
    ],
    datasets: [
      {
        type: 'line',
        label: 'Number of Moons',
        data: [0, 0, 1, 2, 67, 62, 27, 14],
        backgroundColor: [
          'rgba(54,73,93,.5)', // Blue
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)'
        ],
        borderColor: [
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d'
        ],
        borderWidth: 3
      },
      {
        type: 'pie',
        label: 'Planet Mass (x1,000 km)',
        data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
        backgroundColor: [
          'rgba(71, 183,132,.5)' // Green
        ],
        borderColor: ['#47b784'],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            displayFormats: {
              hour: 'MMM DD'
            },
            tooltipFormat: 'MMM D'
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    }
  }
}
