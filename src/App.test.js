import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app", () => {
  it("renders", () => {
    render(<App />);
    expect(screen.getByText("what's up coders")).toBeTruthy();
  });
});
