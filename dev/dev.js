import EscaEcomm from '../src'
window.EscaEcomm = EscaEcomm

setTimeout(() => {
	console.log('Running')
	if (window.EscaEcomm) {
		console.log(window.EscaEcomm)
		window.escaEcomm = new window.EscaEcomm({
			siteId: 'vuly',
			environment: 'testing',
		})

	}
	else{
		console.log('window.EscaEcomm not found')
	}
}, 1000)