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

		// Check for site ID
		if(!options.siteId){
			return this.log('No siteId found.')
		}

		// Set default APIs
		if(!options.stockApi){
			options.stockApi = apis.stock[options.environment]
		}

		// Get product data and IDs
		this.productData = {}
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