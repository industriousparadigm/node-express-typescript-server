import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {res.send('YETI! I am the Yeti!')})

app.listen(port, (err) => {
  if (err) {
    return console.error(err)
  }
  console.log(`Server listening on port ${port}...`)
})