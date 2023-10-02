import { Repository } from '../interfaces/repository.interfaces';
import { User, PrismaClient } from '../../prisma/generated/client';

export class UsersRepositories implements Repository<User> {
  constructor(private readonly client: PrismaClient) {}

  async create({ name, email }: Pick<User, 'name' | 'email'>): Promise<User | null> {
    return this.client.user.create({
      data: { name, email },
    });
  }

  async update({ id, name, email }: Pick<User, 'id' | 'name' | 'email'>): Promise<User | null> {
    return this.client.user.update({
      where: { id },
      data: { name, email },
    });
  }

  async delete({ id }: Pick<User, 'id'>): Promise<User | null> {
    return this.client.user.delete({
      where: { id },
    });
  }

  async getById({ id }: Pick<User, 'id'>): Promise<User | null> {
    return this.client.user.findUnique({
      where: { id },
      include: { posts: true, comments: true },
    });
  }

  async getAll(): Promise<User[] | null> {
    return this.client.user.findMany({
      include: { posts: true, comments: true },
    });
  }
}
