import Cookies from 'js-cookie'

export default function() {
	this.log('Saving cache...')
	Cookies.set(
		'escaProduct',
		this.productData,
		{
			expires: this.options.cache
		}
	)
	return this
}