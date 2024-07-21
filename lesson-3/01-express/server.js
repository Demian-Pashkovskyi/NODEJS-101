import expess from 'express';

const app = expess();

app.get('/', (req, res) => {
	console.log('Method:', req.method);
	console.log('URL:', req.url);
	res.send('Hello Word and Node js ===>');
})

app.listen(8080, () => {
	console.log('Server started on port 8080');
});
