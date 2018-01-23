import { expect } from 'chai'
import Ecomm from '../src'

describe('Ecomm module', () => {
	it('Should return class', () => {
		const ecomm = new Ecomm({
			siteId: 'goalrilla',
		})
		expect(ecomm).to.not.be.empty
	})
})