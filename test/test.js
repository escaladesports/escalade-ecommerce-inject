import { expect } from 'chai'
import Ecomm from '../src'

const options = {
	siteId: 'trophyridge',
	environment: 'testing',
}

describe('Ecomm module', () => {
	it('Should return class', () => {
		const ecomm = new Ecomm(options)
		expect(ecomm).to.not.be.empty
	})
})

describe('Stock method', () => {
	it('Should get stock', async () => {
		const ecomm = new Ecomm(options)

		let stock = await ecomm.getStock([
			'AATS0014R19',
			'AATS2011R19'
		])
		console.log(stock)
	})
})