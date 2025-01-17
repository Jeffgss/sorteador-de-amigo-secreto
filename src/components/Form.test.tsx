import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import { RecoilRoot } from "recoil";

describe("Form.tsx behavior", () => {
  test("When input is empty, new participants cannot be added.", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();

    expect(button).toBeDisabled();
  });

  test("Add a participant if there is a name filled in.", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

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

  test("Duplicate names cannot be added to the list.", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

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

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(button);

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });

  test("The error message should go away after the timers.", () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

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

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(button);

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole("alert");

    expect(errorMessage).toBeNull();
  });
});
