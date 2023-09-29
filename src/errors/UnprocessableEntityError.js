export class UnprocessableEntityError extends Error {
  constructor(message) {
    super(message);

    this.status = 422;
  }
}
