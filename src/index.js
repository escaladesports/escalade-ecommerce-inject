import log from './log'
import apis from './apis'
import getStock from './get-stock'
import getPricing from './get-pricing'
import loadCache from './load-cache'
import findIds from './find-ids'

class Ecomm{
	constructor(options = {}){
		this.options = {
			environment: 'production',
			...options,
		}

		this.log('Escalade ecommerce init...')
		if(!options.siteId){
			return this.log('No siteId found.')
		}

		const handler = {
			get: (target, key) => {
				return target[key]
			},
			set: (target, key, value) => {
				target[key] = value
				return true
			},
		}

		this.productData = {
			stock: new Proxy({}, handler),
			pricing: new Proxy({}, handler),
		}


		// Set default APIs
		if(!options.stockApi){
			options.stockApi = apis.stock[options.environment]
		}

		// Get product data and IDs
		this.loadCache()
		this.findIds()

		// TODO: Update elements

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
}

export default Ecomm