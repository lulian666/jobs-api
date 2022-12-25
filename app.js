require('dotenv').config()
require('express-async-errors')
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

const authenticationMiddleware = require('./middleware/auth')

app.use(express.json())
app.use(express.static('./public'))

app.use(helmet())
app.use(cors())
app.use(xss())
app.set('trust proxy', 1)
app.use(rateLimiter({ windowMs: 15 * 60 * 1000, max: 100 }))

app.get('/', (req, res) => {
    res.send('job api')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticationMiddleware, jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

const start = async () => {
    try {
        await connectDB(MONGO_URI)
        app.listen(PORT, console.log(`Server listening on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()