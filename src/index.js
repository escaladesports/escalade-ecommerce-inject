import log from './log'
import apis from './apis'
import loadCache from './load-cache'
import getElements from './get-elements'
import initProductData from './init-product-data'
import updateElements from './update-elements'
import saveCache from './save-cache'
import fetch from './fetch'
import fetchAll from './fetch-all'

class Ecomm{
	constructor(options = {}){
		this.options = {
			environment: 'production',
			cache: 1, // Days
			poll: 10, // Minutes
			...options,
		}

		this.log('Escalade ecommerce init...')
		if(!this.options.siteId){
			return this.log('No siteId found.')
		}

		const handler = {
			get: (target, key) => {
				return target[key]
			},
			set: (target, key, value) => {
				if (target[key] !== value) {
					target[key] = value
					this.updateElements(key)
					this.saveCache()
				}
				return true
			},
		}

		this.productData = {
			stock: new Proxy({}, handler),
			pricing: new Proxy({}, handler),
		}

		// Set default APIs
		for(let i in apis){
			let key = `${i}Api`
			if(!this.options[key]){
				this.options[key] = apis[i][this.options.environment]
			}
		}

		// Set Zygote props
		if('zygote' in window){
			window.zygote.properties = {
				site: this.options.siteId
			}
			window.zygote.api = this.options.zygoteApi
		}

		// Get product data and IDs
		if (this.options.cache) {
			this.loadCache()
		}
		this.getElements()
		if (this.options.productIds){
			this.options.productIds.forEach(id => {
				this.initProductData(id)
			})
		}

		// Update product data
		this.fetchAll()

		// Set polling interval
		if(this.options.poll){
			setInterval(() => {
				this.fetchAll()
			}, this.options.poll * 60 * 1000)
		}

		return this
	}
}

Ecomm.prototype = {
	log,
	loadCache,
	initProductData,
	updateElements,
	getElements,
	saveCache,
	fetch,
	fetchAll,
}

export default Ecomm