export interface Repository<T extends object> {
  create(input: Partial<T>): Promise<T | null>;

  update(input: Partial<T>): Promise<T | null>;

  delete(id: Partial<T>): Promise<T | null>;

  getById(id: Partial<T>): Promise<T | null>;

  getAll(): Promise<T[] | null>;
}
