import log from './log'
import apis from './apis'
import getStock from './get-stock'
import getPricing from './get-pricing'
import loadCache from './load-cache'
import getElements from './get-elements'
import initProductData from './init-product-data'
import updateElements from './update-elements'
import saveCache from './save-cache'

class Ecomm{
	constructor(options = {}){
		this.options = {
			environment: 'production',
			cache: 1,
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
		this.getStock()
		this.getPricing()
	}
}

Ecomm.prototype = {
	log,
	getStock,
	getPricing,
	loadCache,
	initProductData,
	updateElements,
	getElements,
	saveCache,
}

export default Ecomm