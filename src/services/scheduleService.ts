import { Course } from '../models/courseModel.js'
import { AppDataSource } from '../config/db.js'
import { topologicalSort } from '../utils/topologicalSort.js'

export const createScheduleService = async (
  userId: string,
  courses: { desiredCourse: string; requiredCourse: string }[],
) => {
  const courseRepository = AppDataSource.getRepository(Course)

  const courseEntities = courses.map((course) => {
    const courseEntity = new Course()
    courseEntity.desiredCourse = course.desiredCourse
    courseEntity.requiredCourse = course.requiredCourse
    return courseEntity
  })

  await courseRepository.save(courseEntities)

  const orderedCourses = topologicalSort(courses)

  return orderedCourses
}
