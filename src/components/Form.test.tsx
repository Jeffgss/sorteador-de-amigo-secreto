import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

test("When input is empty, new participants cannot be added.", () => {
  render(<Form />);

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  const button = screen.getByRole("button");

  expect(input).toBeInTheDocument();

  expect(button).toBeDisabled();
});

test("Add a participant if there is a name filled in.", () => {
  render(<Form />);

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  const button = screen.getByRole("button");

  fireEvent.change(input, {
    target: {
      value: "Ana Catarina",
    },
  });

  fireEvent.click(button);

  expect(input).toHaveFocus();
  expect(input).toHaveValue("");
});
