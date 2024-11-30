import { Course } from '../models/courseModel.js'
import { AppDataSource } from '../config/db.js'
import { TopologicalSort } from '../utils/topologicalSort.js'

export const createScheduleService = async (
  userId: string,
  courses: { desiredCourse: string; requiredCourse: string }[],
) => {
  const sorter = new TopologicalSort()
  const courseRepository = AppDataSource.getRepository(Course)

  const course = await courseRepository.findOne({ where: { userId: userId } })

  if (course && course.userId === userId) throw new Error('Schedule for this user already exist')

  const courseEntities = courses.map((course) => {
    sorter.addDependency(course.desiredCourse, course.requiredCourse)

    const courseEntity = new Course()
    courseEntity.desiredCourse = course.desiredCourse
    courseEntity.requiredCourse = course.requiredCourse
    courseEntity.userId = userId
    return courseEntity
  })

  await courseRepository.save(courseEntities)

  const orderedCourses = sorter.sort()

  return orderedCourses
}
