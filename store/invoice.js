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
    this.invoice_date = formatDate(invoice_date)
    this.invoice_no = invoice_no
    this.created_on = created_on
      ? formatDate(new Date(created_on))
      : formatDate(new Date())
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
      const batch = new Batch({ ...x, invoice_no })

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
    distributions_count,
    distributed_quantity,
    created_at
  }) {
    this.description = description
    this.batch_no = batch_no
    this.quantity = quantity
    this.num_of_ships = num_of_ships
    this.mfg_date = formatDate(new Date(mfg_date))
    this.exp_date = formatDate(new Date(exp_date))
    this.invoice_no = invoice_no
    this.distributions_count = distributions_count || 0
    this.distributed_quantity = distributed_quantity || 0
    this.created_at = formatDate(new Date(created_at)) || formatDate(new Date())
  }
}

export const state = () => ({
  name: localStorage.getItem('name'),
  host: localStorage.getItem('host'),
  jobboro: {
    user: null,
    recruteur: false
  },
  invoices: [],
  distributions: [],
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

  addDistributions(state, distributions) {
    state.distributions = distributions
  },

  clear(state) {
    state.invoices = []
  },

  resetApp(state) {
    state.name = ''
    state.host = ''
    localStorage.clear()
  },

  updateHost(state, host) {
    state.host = host
    localStorage.setItem('host', host)
  },

  updateName(state, name) {
    state.name = name
    localStorage.setItem('name', name)
  },

  jobboroLogin(state, user) {
    state.jobboro = {
      ...state.jobboro,
      user,
      recruteur: user ? user.entreprise : false
    }
    localStorage.setItem('user', JSON.stringify(user))
  },

  jobboroLogout(state) {
    state.jobboro = { ...state.jobboro, user: null }
  },

  add(state, invoice) {
    state.invoices.push(invoice)
  },
  updateInvoice(state, updatedInvoice) {
    console.log(updatedInvoice)
    const invoice = state.invoices.find(
      (i) => i.invoice_no === updatedInvoice.invoice_no
    )
    const index = state.invoices.indexOf(invoice)
    state.invoices[index] = new Invoice({
      ...state.invoices[index],
      ...updatedInvoice
    })
    state.invoices = [...state.invoices]
  },
  deleteInvoice(state, updatedInvoice) {
    state.invoices = state.invoices.filter(
      (x) => x.invoice_no !== updatedInvoice.invoice_no
    )
  },
  deleteBatch(state, batch) {
    const invoice = state.invoices.find(
      (i) => i.invoice_no === batch.invoice_no
    )
    invoice.batches = invoice.batches.filter(
      (b) => b.batch_no !== batch.batch_no
    )

    state.invoices = [...state.invoices]
  },

  updateBatch(state, updatedBatch) {
    console.log('UpdatedBatch')
    console.log(updatedBatch)
    const invoice_index = state.invoices.find(
      (invoice) =>
        !!invoice.batches.find(
          (_batch) => Number(_batch.batch_no) === Number(updatedBatch.batch_no)
        )
    )
    const batch = invoice_index.batches.find(
      (_batch) => Number(_batch.batch_no) === Number(updatedBatch.batch_no)
    )

    const index_batch = invoice_index.batches.indexOf(batch)
    invoice_index.batches[index_batch] = {
      ...batch,
      ...updatedBatch
    }

    state.invoices = [...state.invoices]
  },
  addDistribution(state, { region_code, batch_no, quantity }) {
    /* const invoice_search = state.invoices.find(
      (invoice) =>
        !!invoice.batches.find((_batch) => Number(_batch.batch_no) === batch_no)
    )
    const batch = invoice_search.batches.find(
      (_batch) => Number(_batch.batch_no) === batch_no
    )
    batch.region = region_code
    batch.distribution_date = formatDate(new Date())

    state.invoices = [...state.invoices] */
    const distr = state.distributions.find((dist) => dist.code === region_code)
    distr.distributions.push({
      region_code,
      batch_no,
      quantity,
      created_on: new Date()
    })
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
    return batches
    // Obselete data
    return batches.map((x) => ({
      ...x,
      region_full: state.regions
        .find((y) => y.code === x.region)
        ?.name.toUpperCase(),
      status: x.region ? 'Distributed' : 'Pending'
    }))
  },
  getInvoice: (state) => (id) => {
    console.log(id)
    return state.invoices.find((invoice) => invoice.invoice_no === id)
  },
  getRegion: (state) => (code) => {
    return state.regions.find((region) => region.code === code)
  },
  getBatch: (_, getters) => (id) => {
    console.log(id)
    console.log(getters.allBatches)
    return getters.allBatches.find(
      (batch) => Number(batch.batch_no) === Number(id)
    )
  },
  getDistributionOfBatch: (state) => (id) => {
    const results = []
    state.distributions.forEach((reg) =>
      reg.distributions.forEach((dist) => {
        if (Number(dist.batch_no) === Number(id))
          results.push({
            ...dist,
            region: state.regions
              .find((x) => x.code === dist.region_code)
              .name.toUpperCase(),
            created_on: formatDate(dist.created_on)
          })
      })
    )

    return results
  },
  getBatchForRegion: (state) => (region) => {
    console.log(region)
    const temp = state.distributions.find((r) => r.code === region)
    return temp ? temp.distributions : []
    // return temp.distributions
  },
  getDistributions: (state, getters) => {
    return getters.allBatches.filter((batch) => !!batch.distribution_date)
  }
}

export const convertToDate = function(date) {
  const _date = new Date(date)
  return (
    _date.getMonth() +
    1 +
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
