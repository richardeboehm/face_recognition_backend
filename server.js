const express = require('express');
const cors = require('cors');
const { HandleApiCall } = require('./src/ProcessImage');

const app = express().use(express.json()).use(cors());

app.get('/image', (req, res) => {
	HandleApiCall(req, res);
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App is running on port ${process.env.PORT || 3000}.`);
});