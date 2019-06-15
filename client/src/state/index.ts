import { action, observable, decorate, computed } from "mobx";

class State {
  example: number = 5;

  get examplePlus() {
    return this.example + 1;
  }

  changeExample() {
    this.example = 10;
  }
}

decorate(State, {
  example: observable,
  examplePlus: computed,
  changeExample: action
});

export default new State();
