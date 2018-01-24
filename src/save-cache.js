import Cookies from 'js-cookie'

export default function() {
	Cookies.set(
		'escaProduct',
		this.productData,
		{
			expires: this.options.cache
		}
	)
}