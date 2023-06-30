export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('sqft must be a umber');
    } else {
      this._sqft = value;
    }
  }

  evacuationWarningMessage() {
    console.log(this._sqft);
    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
