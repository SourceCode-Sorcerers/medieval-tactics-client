let apiUrl
const apiUrls = {
  production: 'https://medieval-tactics-api.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

let socketUrl
const socketUrls = {
  production: 'https://medieval-tactics-api.herokuapp.com:5000',
  development: 'http://localhost:5000'
}

if (window.location.hostname === 'localhost') {
  socketUrl = socketUrls.development
} else {
  socketUrl = socketUrls.production
}

export { apiUrl, socketUrl }
