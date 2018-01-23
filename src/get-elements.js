import attrs from './element-attributes'

function newElementObj(){
	let obj = {}
	for(let i in attrs){
		obj[i] = []
	}
}

export default function () {
	this.elements = {}
	for(let camel in attrs){
		let attr = attrs[camel]
		let els = document.querySelectorAll(`[${attr}]`)
		for(let i = els.length; i--;){
			let el = els[i]
			let id = el.getAttribute(attr).toUpperCase()
			if(!(id in this.elements)){
				this.elements[id] = newElementObj()
			}
			this.elements[id][camel].push(el)
		}
	}
}