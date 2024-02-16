import Car from '../Car/Car.js';

class RacingGame {
  #tryCount;
  #cars;

  constructor({ racingCarNames, tryCount }) {
    this.#tryCount = tryCount;
    this.#cars = racingCarNames.map((carName) => new Car(carName));
  }

  #updateRacingResult(rowIndex, randomMoveCounts) {
    return this.#cars.map((car, columnIndex) => car.move(randomMoveCounts[rowIndex][columnIndex]));
  }

  startRace(randomMoveCounts) {
    const racingResult = Array.from({ length: this.#tryCount }, (_, rowIndex) =>
      this.#updateRacingResult(rowIndex, randomMoveCounts),
    );

    return racingResult;
  }
}

export default RacingGame;