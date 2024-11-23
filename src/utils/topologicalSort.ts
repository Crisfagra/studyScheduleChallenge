export function topologicalSort(courses) {
  const graph = new Map()
  const inDegree = new Map()

  courses.forEach(({ desiredCourse, requiredCourse }) => {
    if (!graph.has(desiredCourse)) graph.set(desiredCourse, [])
    if (!graph.has(requiredCourse)) graph.set(requiredCourse, [])
    graph.get(requiredCourse).push(desiredCourse)

    inDegree.set(desiredCourse, (inDegree.get(desiredCourse) || 0) + 1)
    if (!inDegree.has(requiredCourse)) inDegree.set(requiredCourse, 0)
  })

  const queue = [...inDegree.entries()].filter(([_, degree]) => degree === 0).map(([node]) => node)

  const result = []
  while (queue.length) {
    const current = queue.shift()
    result.push(current)

    graph.get(current).forEach((neighbor) => {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1)
      if (inDegree.get(neighbor) === 0) queue.push(neighbor)
    })
  }

  if (result.length !== graph.size) {
    throw new Error('There is a cyclic in the course prerequisites.')
  }

  return result
}
