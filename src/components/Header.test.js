import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import Header from "./Header"
import App from "../App"

describe("#header", () => {
  it("renders header score text", async () => {
    render(<Header />)

    const scoreText = await screen.findByText("Score")
    expect(scoreText).toBeDefined()
  })
})
