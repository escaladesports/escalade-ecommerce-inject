//import EscaEcomm from '../dist-browser/v1'
//window.EscaEcomm = EscaEcomm

setTimeout(() => {
	console.log('Running')
	if (window.EscaEcomm) {
		window.escaEcomm = new window.EscaEcomm({
			siteId: 'goalrilla',
		})

	}
	else{
		console.log('window.EscaEcomm not found')
	}
}, 1000)