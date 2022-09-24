import { holdRaffle } from "./holdRaffle";

describe("Given a secret friend raffle.", () => {
  test("Each participant does not raffle their own name.", () => {
    const participants = [
      "Ana",
      "Catarina",
      "Maria",
      "João",
      "Monica",
      "Chandler",
    ];

    const raffle = holdRaffle(participants);
    participants.forEach((participant) => {
      const secretFriend = raffle.get(participant);
      expect(secretFriend).not.toEqual(participant);
    });
  });
});
