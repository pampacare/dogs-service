import app from './app'

const port = 3333

app.use(express.json())

app.use(router)

app.listen(process.env.PORT ?? 3333, () =>
  console.log('🚀 REST API server ready')
)
