const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});*/

app.get('/api/customers', (req, res) => {
      res.send([
        {  'id': 1,
        'image': 'https://placeimg.com/128/128/1',
        'name': '조성민',
        'Birthday': '961222',
        'Gender': 'male',
        'Job' : 'student'
       },
       {
        'id': 2,
        'image': 'https://placeimg.com/128/128/2',
        'name': '홍길동',
        'Birthday': '961222',
        'Gender': 'male',
        'Job' : 'student'
       },
       {
        'id': 3,
        'image': 'https://placeimg.com/128/128/3',
        'name': '이순신',
        'Birthday': '961222',
        'Gender': 'male',
        'Job' : 'student'
       }
      ]);      
});


app.listen(port, ()=> console.log(`Listening on port ${port}`));
