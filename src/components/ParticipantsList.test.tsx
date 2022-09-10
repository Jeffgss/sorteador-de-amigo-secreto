import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { ParticipantList } from "./ParticipantList";

describe("An empty list of participants.", () => {
  test("Must be rendered without elements.", () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(0);
  });
});

describe("A filled list of participants.", () => {
  const participants = ["Ana", "Catarina"];

  test("Must be rendered without elements.", () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(participants.length);
  });
});
