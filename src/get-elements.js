import attrs from './element-attributes'

function newElementObj(){
	let obj = {}
	for(let i in attrs){
		obj[i] = []
	}
	return obj
}

export default function () {
	if (!this.elements) {
		this.elements = {}
	}
	for(let camel in attrs){
		let attr = attrs[camel]
		let els = document.querySelectorAll(`[${attr}]`)
		for(let i = els.length; i--;){
			let el = els[i]
			let id = el.getAttribute(attr).toUpperCase()
			if(!(id in this.elements)){
				this.elements[id] = newElementObj()
			}
			if (this.elements[id][camel].indexOf(el) === -1) {
				this.elements[id][camel].push(el)
			}
			this.initProductData(id)
		}
	}
}