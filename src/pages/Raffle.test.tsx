import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../components/state/hook/useParticipantsList";
import Raffle from "./Raffle";
import { useResultRaffle } from "../components/state/hook/useResultRaffle";

jest.mock("../components/state/hook/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

jest.mock("../components/state/hook/useResultRaffle", () => {
  return {
    useResultRaffle: jest.fn(),
  };
});

describe("On the raffle page.", () => {
  const participants = ["Ana", "Catarina", "Maria"];

  const result = new Map([
    ["Ana", "Catarina"],
    ["Catarina", "Maria"],
    ["Maria", "Ana"],
  ]);

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
    (useResultRaffle as jest.Mock).mockReturnValue(result);
  });

  test("All participants can display their secret friend.", () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");

    expect(options).toHaveLength(participants.length + 1);
  });

  test("The secret friend is displayed when prompted.", () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });
    const button = screen.getByRole("button");
    fireEvent.click(button);

    const secretFriend = screen.getByRole("alert");

    expect(secretFriend).toBeInTheDocument();
  });
});
