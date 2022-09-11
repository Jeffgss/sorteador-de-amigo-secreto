import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";

describe("Where there are not enough participants.", () => {
  test("The joke cannot be started.", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});
