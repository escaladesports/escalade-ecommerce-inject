export default function() {
	if (!this.options.silent) {
		console.log(...arguments)
	}
}