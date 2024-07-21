import expess from 'express';

const app = expess();

app.get('/', (request, response) => {
	console.log('Method:', request.method);
	console.log('URL:', request.url);
	response.send('Hello Word and Node js');
})

app.listen(8080, () => {
	console.log('Server started on port 8080');
});
