const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json({ limit: '50mb' }))

app.use(cors())

app.use(express.json())

mongoose.connect(
  'mongodb://giga:vivomini@rest-shard-00-00.nl9di.mongodb.net:27017,rest-shard-00-01.nl9di.mongodb.net:27017,rest-shard-00-02.nl9di.mongodb.net:27017/rest?ssl=true&replicaSet=atlas-if60ss-shard-0&authSource=admin&retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)

const Subscribers = require('./router/subscribers/SubscribersRouter')
app.use('/api', Subscribers)

const Sponsors = require('./router/sponsors/SponsorsRouter')
app.use('/api', Sponsors)

const Products = require('./router/products/ProductsRouter')
app.use('/api', Products)

const Notifications = require('./router/notifications/NotificationsRouter')
app.use('/api', Notifications)

const Signup = require('./router/Signup/SignupRouter')
app.use('/api', Signup)

const Login = require('./router/login/LoginRouter')
app.use('/api', Login)

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
  console.log(`server listen at ${PORT}`)
})
