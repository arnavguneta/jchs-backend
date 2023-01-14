const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'html');

// setup static dir to serve
app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
	const allowedOrigins = ['https://arnav.guneta.com','http://localhost:3006','http://localhost:3000'];
	const origin = req.headers.origin;
	if (allowedOrigins.includes(origin)) {
		 res.setHeader('Access-Control-Allow-Origin', origin);
	}
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.header('Access-Control-Allow-Credentials', true);
	return next();
});

// app.get("/", (req, res) => {
// 	res.writeHead(302, {
// 		'Location': '/projects/golf/'
// 		//add other headers here...
// 	  });
// 	  res.end();
// });

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});

