
function setStyles(els, display){
	display = display ? 'block' : 'none'
	els.forEach(el => {
		el.style.display = display
	})
}

export default function (id) {
	if(this.elements[id]){
		let els = this.elements[id]
		let stock = this.productData.stock[id]
		let pricing = this.productData.pricing[id]
		let formattedPricing = `$${price.toFixed(2)}`
		let available
		let loading

		if(stock === 'unknown' || pricing === 'unknown'){
			loading = true
			available = false
		}
		else{
			loading = false
			if(stock && pricing){
				available = true
			}
			else{
				available = false
			}
		}

		setStyles(els.isLoading, loading)
		setStyles(els.isAvailable, available)
		setStyles(els.isNotAvailable, !available)
		els.price.forEach(el => {
			el.textContent = formattedPricing
		})

	}
}