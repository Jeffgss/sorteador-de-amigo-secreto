import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../components/state/hook/useParticipantsList";
import Raffle from "./Raffle";

jest.mock("../components/state/hook/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

describe("On the raffle page.", () => {
  const participants = ["Ana", "Catarina", "Maria"];

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });

  test("All participants can display their secret friend.", () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");

    expect(options).toHaveLength(participants.length);
  });
});
