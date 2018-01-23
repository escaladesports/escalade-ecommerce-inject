import fetch from 'isomorphic-fetch'

export default async function() {
	const ids = Object.keys(this.productData)

	try{
		let data = await fetch(this.options.pricingApi, {
			method: 'POST',
			body: JSON.stringify({
				site: this.options.siteId,
				ids: ids
			})
		})
		data = data.json()
		for (let i in this.data) {
			this.productData[i.toUpperCase()].pricing = this.data[i]
		}
		return data
	}
	catch(err){
		console.error(err)
	}

	return false
}