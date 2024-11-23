import { DataSource } from 'typeorm'
import { Course } from '../models/courseModel.js'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'crisfagra',
  database: process.env.DB_NAME || 'schedule',
  entities: [Course],
  synchronize: false,
  migrations: ['dist/config/migrations/*.js'],
  logging: true,
})

export const sync = async () => {
  try {
    await AppDataSource.initialize()
    console.log('DataSource has been initialized!')
  } catch (error) {
    console.error('Error during DataSource initialization', error)
  }
}
