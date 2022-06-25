const utils = (() => {
	const randomNationality = () => {
		const nationalities = [
			'Polish',
			'Qatari',
			'Saudi',
			'Serbian',
			'Tongan',
			'Thai',
			'Welsh',
			'Sudanese',
		]

		const random = Math.floor(Math.random() * nationalities.length)
		return nationalities[random]
	}

	const randomString = characters => {
		var text = ''
		var possible =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

		for (var i = 0; i < characters; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length))

		return text
	}
	function randomDate() {
		const maxDate = Date.now()
		const timestamp = Math.floor(Math.random() * maxDate)
		return new Date(timestamp).toISOString().split('T')[0]
	}
	return {
		randomString,
		randomDate,
		randomNationality,
	}
})()

export default utils
