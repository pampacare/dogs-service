import express from 'express'

const app = express()

app.listen(process.env.PORT ?? 3333, () =>
  console.log('🚀 REST API server ready')
)
