import { createScheduleService } from '../services/scheduleService.js'

export const createScheduleController = async (req, res): Promise<any> => {
  try {
    const { userId, courses } = req.body
    const orderedCourses = await createScheduleService(userId, courses)
    res.status(200).json(orderedCourses)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
