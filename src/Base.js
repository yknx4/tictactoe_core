export default class Base {
  constructor() {
    if (new.target === Base) {
      throw new TypeError("Cannot construct Base isnstances directly");
    }
  }
}
