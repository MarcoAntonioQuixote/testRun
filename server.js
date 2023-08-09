const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello UK Cohort 1')
})

let students = ['Prince', 'Konstantyn', 'Tim', 'Manuel', 'Dalien', 'Ingus']

app.get('/students', (req,res) => {
    res.status(200).json(students)
})

app.listen(port, () => {
    console.log(`App listening on: ${port}`)
})