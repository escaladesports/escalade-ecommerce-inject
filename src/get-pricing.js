import fetch from 'isomorphic-fetch'

export default async function() {
	const ids = Object.keys(this.productData.pricing)

	try{
		let data = await fetch(this.options.pricingApi, {
			method: 'POST',
			body: JSON.stringify({
				site: this.options.siteId,
				ids: ids
			})
		})
		data = await data.json()
		for (let i in data) {
			this.productData.pricing[i.toUpperCase()] = data[i]
		}
		return data
	}
	catch(err){
		console.error(err)
	}

	return false
}