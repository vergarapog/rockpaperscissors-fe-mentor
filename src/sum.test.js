import { describe, expect, it } from "vitest"
import { sum } from "./sum"

describe("#sum", () => {
  it("returns 0 with no numbers", () => {
    expect(sum([])).toBe(0)
  })

  it("returns same number with one number", () => {
    expect(sum([2])).toBe(2)
  })

  it("returns sum with multiple numbers", () => {
    expect(sum([1, 2, 3])).toBe(6)
  })
})
