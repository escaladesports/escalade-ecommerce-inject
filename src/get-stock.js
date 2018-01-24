import fetch from 'isomorphic-fetch'

export default async function () {
	const ids = Object.keys(this.productData.stock)

	try{
		let data = await fetch(this.options.stockApi, {
			method: 'POST',
			body: JSON.stringify({
				site: this.options.siteId,
				ids: ids
			})
		})
		data = await data.json()
		console.log('STOCK:', JSON.stringify(data, null, 3))
		for(let i in data){
			this.productData.stock[i.toUpperCase()] = data[i]
		}
		return data
	}
	catch(err){
		console.error(err)
	}

	return false
}