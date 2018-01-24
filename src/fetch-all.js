import fetch from './fetch'

export default async function () {
	this.log('Requesting stock and pricing...')
	this.fetch('pricing')
	this.fetch('stock')
}