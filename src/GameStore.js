import { makeAutoObservable } from "mobx";
import _ from "lodash";

class GameStore {
  text = `W mieścinie pewnej, prowincji Manchy, której nazwiska nie powiem, żył niedawny- Szlachcic
  mi czasy hidalgo¹² pewien, z liczby tych, co to prócz spisy¹³ u siodła, szabliska starego,
  szkapy chuǳiny i paru gończych, niewiele co więcej mają. Rosolina powszednia, z baraniny częściej niż z wołowiny wygotowana na obiad, bigosik z resztek obiadu prawie
  co wieczór na kolację, co piątek soczewica, co sobota jaja saǳone po hiszpańsku, a na
  nieǳielę gołąbeczek jakiś w dodatku do coǳiennej strawy, zjadały mu corocznie trzy
  czwarte części całego dochodu. Reszta szła na przyoǳiewek: na opończę z sukna cienkiego, hajdawery aksamitne z takimiż łapciami i na świtkę¹⁴ z krajowego samoǳiału
  dobornego, którą się w powszednie dni tygodnia obchoǳił. Miał on przy sobie ochmistrzynię, która, choć się do tego nie przyznawała, na czwarty krzyżyk dobrze już nastąpiła,
  siostrzenicę, której jeszcze dwuǳiesta wiosna nie zaświeciła i parobczaka sprawnego do
  usługi i w domu, i poza domem, i koło konia, i koło gospodarki. Wiekiem hidalgo nasz
  już na pięćǳiesiątkę zarywał, ale ciałem był krzepki, w sobie kościsty, na twarzy suchy,
  zawiędły, do rannego stawania od ptaka skorszy, a do polowania bez miary zapalony.
  Przydomek miał podobno Quixada albo Quesada, bo co do tego nie ma zgodności mięǳy historykami, którzy o nim pisali; ale wedle wszelkiego prawdopodobieństwa zdaje
  się, że się zwał Quĳana. Mniejsza wszakże o to dla naszej historii; tu rzecz główna w tym,
  ażeby opowieść na jedno źdźbło z prawdą się nie rozminęła.`;

  wordsLimit = 20;
  currentIndex = 0;
  isFinished = false;
  hideIndex = 0;

  get calculatedTextDecorator() {
    return this.calculateWords + "[...]";
  }

  gameTimerId = 0;
  interval = 50;

  start = () => {
    this.isFinished = false;

    this.gameTimerId = setInterval(() => {
      if (this.hideIndex === this.calculatedTextDecorator.length) {
        this.stop();
      } else {
        this.hideLetter();
      }
    }, this.interval);
  };

  stop = () => {
    clearInterval(this.gameTimerId);
    this.isFinished = true;
  };

  hideLetter = () => {
    this.hideIndex++;
  };

  updateCurrentIndex = () => {
    this.currentIndex += this.wordsLimit;
  };

  get calculateWords() {
    const arrayWords = this.text.split(" ");
    const allWords = arrayWords.slice(
      this.currentIndex,
      this.wordsLimit + this.currentIndex
    );

    return allWords.join(" ");
  }

  constructor() {
    makeAutoObservable(this);
  }

  level = 1;
  numberOfWordsInQuestion = 2;
  numberOfCorrectAnswers = 1;

  get question() {
    const allWords = this.text
      .toLowerCase()
      .split(" ")
      .filter((el) => el.length > 4);
    const currentWords = _.shuffle(this.calculateWords.split(" ")).filter(
      (el) => el.length > 4
    );

    //DOdanie prawidłowych
    let result = _.shuffle(currentWords).slice(0, this.numberOfCorrectAnswers);
    result = result.map((el) => {
      return { value: el, isCorrect: true };
    });
    //
    const uniqAllWords = _.uniq(allWords);
    const shuffledAllWords = _.shuffle(uniqAllWords);
    let index = 0;

    while (
      index < shuffledAllWords.length &&
      result.length < this.numberOfWordsInQuestion
    ) {
      //TODO REMOVE ; . ,
      const wordToAdd = shuffledAllWords[index];

      if (!currentWords.includes(wordToAdd.toLowerCase())) {
        result.push(wordToAdd);
      }

      index++;
    }

    result = result.map((el) => {
      if (typeof el === "string") {
        return { value: el, isCorrect: false };
      }

      return el;
    });

    return _.shuffle(result);
  }

  giveAnswer(answer) {
    answer.className = answer.isCorrect ? "correct" : "wrong";
  }
}

export { GameStore };

export const store = new GameStore();
