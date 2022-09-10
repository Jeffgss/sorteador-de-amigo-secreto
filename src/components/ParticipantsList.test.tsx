import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { ParticipantList } from "./ParticipantList";
import { useParticipantsList } from "./state/hook/useParticipantsList";

jest.mock("./state/hook/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

describe("An empty list of participants.", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

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
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });

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
