export default function () {
	// Get IDs from options
	if(options.productIds){
		options.productIds.forEach(id => {
			if (!(id in this.productData)) {
				this.productData[id] = {}
			}
		})
	}

	// Get IDs from elements
	let attrs = [
		'is-loading',
		'is-available',
		'is-not-available',
		'price',
	]
	attrs.forEach(attr => {
		attr = `data-esca-${attr}`
		let els = document.querySelectorAll(attr)
		for(let i = els.length; i--;){
			let id = els[i].getAttribute(attr).toUpperCase()
			if (!(id in this.productData)){
				this.productData[id] = {}
			}
		}
	})
}