import React from "react";
import { render, screen } from "@testing-library/react";

test("When input is empty, new participants cannot be added.", () => {
  render(<Form />);

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  const button = screen.getByRole("button");

  expect(input).toBeInTheDocument();

  expect(button).toBeDisabled();
});
