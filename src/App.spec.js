import { GameStore } from "./GameStore";

describe("GameStore Text CRUD tests", () => {
  let store;
  beforeEach(() => {
    store = new GameStore();
  });

  it("Set number of return words", async () => {
    store.text = "Jeden dwa trzy cztery piec szesc siedem";
    store.wordsLimit = 2;

    expect(store.calculatedText).toBe("Jeden dwa");
  });

  it("Create dynamic question according to limit", async () => {
    store.text = "Jeden dwa trzy cztery piec szesc siedem";
    const wrongWords = store.text
      .split(" ")
      .slice(2, store.text.split("").length);
    store.wordsLimit = 2;
    expect(wrongWords.length).toBe(5);
    expect(wrongWords[wrongWords.length - 1]).toBe("siedem");
    expect(store.calculatedText).toBe("Jeden dwa");
    expect(store.question.some((el) => wrongWords.includes(el))).toBeTruthy();
    expect(store.question.words.includes("dwa")).toBeTruthy();
    expect(store.question.words.includes("Jeden")).toBeTruthy();
  });
});
