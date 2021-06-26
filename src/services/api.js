import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
})