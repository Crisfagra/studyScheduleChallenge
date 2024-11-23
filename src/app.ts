import express from 'express'
import { authenticate } from './config/firebase.js'
import { AppDataSource } from './config/db.js'
import { createScheduleController } from './controllers/scheduleController.js'

const app = express()
app.use(express.json())

app.post('/api/schedule', authenticate, createScheduleController)

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running on port 3000')
    })
  })
  .catch((error) => console.log(error))

export default app
