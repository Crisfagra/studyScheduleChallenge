export class TopologicalSort {
  private graph: Map<string, string[]>
  private inDegree: Map<string, number>

  constructor() {
    this.graph = new Map()
    this.inDegree = new Map()
  }

  addDependency(desiredCourse: string, requiredCourse: string): void {
    if (!this.graph.has(desiredCourse)) {
      this.graph.set(desiredCourse, [])
      this.inDegree.set(desiredCourse, 0)
    }
    if (!this.graph.has(requiredCourse)) {
      this.graph.set(requiredCourse, [])
      this.inDegree.set(requiredCourse, 0)
    }

    this.graph.get(requiredCourse)!.push(desiredCourse)

    this.inDegree.set(desiredCourse, this.inDegree.get(desiredCourse)! + 1)
  }

  sort(): string[] {
    const order: string[] = []
    const queue: string[] = []

    this.inDegree.forEach((degree, desiredCourse) => {
      if (degree === 0) {
        queue.push(desiredCourse)
      }
    })

    while (queue.length > 0) {
      const current = queue.shift()!
      order.push(current)

      for (const dependent of this.graph.get(current)!) {
        this.inDegree.set(dependent, this.inDegree.get(dependent)! - 1)
        if (this.inDegree.get(dependent) === 0) {
          queue.push(dependent)
        }
      }
    }

    if (order.length !== this.graph.size) {
      throw new Error('Cycle detected! The graph is not a Directed Acyclic Graph (DAG).')
    }

    return order
  }
}
