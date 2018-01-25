export default function(id){
	if (!(id in this.productData.stock)) {
		this.productData.stock[id] = 'unknown'
	}
	if (!(id in this.productData.pricing)) {
		this.productData.pricing[id] = 'unknown'
	}
	return this
}