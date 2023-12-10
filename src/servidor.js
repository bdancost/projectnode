const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.json({name: 'Daniel', age: 35});
})

app.post('/userdata', (request, response) => {
    console.log(request.body)
})

app.listen(4000);