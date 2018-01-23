import log from './log'

class Ecomm{
	constructor(options = {}){
		this.options = {
			...options
		}
		this.log('Escalade ecommerce init...')
		if(!options.siteId){
			return this.log('No siteId found.')
		}
	}
}

Ecomm.prototype = {
	log: log,
}

export default Ecomm