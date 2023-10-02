export class UnprocessableEntityError extends Error {
  public readonly status: number = 422;
}
