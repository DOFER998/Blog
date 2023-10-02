export class NotFoundError extends Error {
  public readonly status: number = 404;
}
