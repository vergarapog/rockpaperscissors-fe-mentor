import { render, screen } from "@testing-library/react";

import Header from "./Header";

import { AppProvider } from "../context";

describe("#header", () => {
  it("renders header score text", async () => {
    render(
      <AppProvider>
        <Header />
      </AppProvider>
    );

    const scoreText = await screen.findByText("SCORE");
    expect(scoreText).toBeDefined();
  });
});
