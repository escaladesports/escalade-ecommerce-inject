import Cookies from 'js-cookie'

export default function() {
	let data = Cookies.get('escaProduct')
	if(data){
		this.log('Loaded product data from cookie:', data)
		for(let i in data){
			this.productData[i] = data[i]
		}
	}
}