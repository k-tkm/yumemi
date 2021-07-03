export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
      },
      'X-API-KEY': process.env.API_KEY,
      'Content-Type': 'application/json',
    },
    data: {},
  })

  // Set baseURL to something different
  api.setBaseURL('https://opendata.resas-portal.go.jp/api/v1')

  // Inject to context as $api
  inject('api', api)
}
