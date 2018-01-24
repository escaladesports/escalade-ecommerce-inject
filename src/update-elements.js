
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

		console.log('LOADING:', loading)
		console.log('AVAILABLE:', available)
		console.log('')

		setStyles(els.isLoading, loading)
		els.price.forEach(el => {
			// TODO: format number
			el.textContent = pricing
		})
		setStyles(els.isAvailable, available)
		setStyles(els.isNotAvailable, !available)

	}
}