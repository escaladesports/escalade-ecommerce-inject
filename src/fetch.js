import fetch from 'isomorphic-fetch'

export default async function (type) {
	const ids = Object.keys(this.productData[type])

	try{
		let data = await fetch(this.options[`${type}Api`], {
			method: 'POST',
			body: JSON.stringify({
				site: this.options.siteId,
				ids: ids
			})
		})
		data = await data.json()
		this.log(`Fetched data for ${type}:`, data)
		for(let i in data){
			this.productData[type][i.toUpperCase()] = data[i]
		}
	}
	catch(err){
		console.error(err)
	}

	return this
}