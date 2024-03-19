import axios from "axios"

const api_url = 'http://localhost:8080/'

const service = axios.create({baseURL: api_url})

const handleResponse = response => response.data

export const dateSearch = async (startDate, endDate) => 
	await service.get(`flights/date?startDate=${startDate}&endDate=${endDate}`)
	.then(response => handleResponse(response))

export const airlineSearch = async airline => 
	await service.get(`flights/airline/${airline}`)
	.then(response => handleResponse(response))

export const priceSearch = async (min, max) => 
	await service.get(`flights/price?min=${min}&max=${max}`)
	.then(response => handleResponse(response))

export const destinationSearch = async destination => 
	await service.get(`flights/destination/${destination}`)
	.then(response => handleResponse(response))

export const originSearch = async origin => 
	await service.get(`flights/origin/${origin}`)
	.then(response => handleResponse(response))
