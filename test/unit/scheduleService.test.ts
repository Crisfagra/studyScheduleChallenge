import { topologicalSort } from '../../src/utils/topologicalSort'

describe('Given a desired courses and required courses', () => {
  test('should return courses in correct order', () => {
    const courses = [
      {
        "desiredCourse": "PortfolioConstruction",
        "requiredCourse": "PortfolioTheories"
        },
        {
        "desiredCourse": "InvestmentManagement",
        "requiredCourse": "Investment"
        },
        {
        "desiredCourse": "Investment",
        "requiredCourse": "Finance"
        },
        {
        "desiredCourse": "PortfolioTheories",
        "requiredCourse": "Investment"
        },
        {
        "desiredCourse": "InvestmentStyle",
        "requiredCourse": "InvestmentManagement"
      }        
    ]
    const result = topologicalSort(courses)
    expect(result).toEqual([
      "Finance",
      "Investment",
      "InvestmentManagement",
      "PortfolioTheories",
      "InvestmentStyle",
      "PortfolioConstruction",
    ])
  })
})

