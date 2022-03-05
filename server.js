const express = require('express')

const app = express()

app.use("/", (req, res) => {
	res.end(JSON.stringify({
		abc: 123
	}))
})

app.listen(3000, () => {
	console.log("服务在： http://localhost:3000")
})