
function setStyles(els, display){
	display = display ? 'block' : 'none'
	els.forEach(el => {
		el.style.display = display
	})
}

function formatNumber(num) {
	let array = num
	if(typeof array === 'string'){
		array = Number(array)
	}
	if(typeof array === 'number'){
		array = array.toFixed(2)
	}
	array = array.split('')
	let index = -3
	while (array.length + index > 0) {
		array.splice(index, 0, ',')
		// Decrement by 4 since we just added another unit to the array.
		index -= 4
	}
	return array.join('')
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

		setStyles(els.isLoading, loading)
		els.price.forEach(el => {
			// TODO: format number
			let formatted = pricing
			if(typeof formatted === 'string'){
				formatted = Number(formatted)
			}
			formatted = '$' + formatted.toFixed(2)
			el.textContent = formatted
		})
		els.addToCart.forEach(el => {
			el.setAttribute('data-price', pricing)
		})
		setStyles(els.isAvailable, available)
		setStyles(els.isNotAvailable, !available)

	}
}