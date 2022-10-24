const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000
app.use(cors())

const courses = require('./data/coursesProgram.json')

app.get('/', (req, res) => {
  res.send('data loding....')
})
app.get('/courses', (req, res) => {
    res.send(courses)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})