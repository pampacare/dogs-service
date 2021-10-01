import app from './app'

const port = 3333

app.listen(port, () =>
  console.log(`🚀 REST API server ready at: http://localhost:${port}`)
)
