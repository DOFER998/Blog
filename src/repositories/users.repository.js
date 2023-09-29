import { prisma } from '../db.js';

export class UsersRepository {

  async create(name, email) {
    return prisma.user.create({
      data: { name, email },
    });
  }

  async update(id, name, email) {
    return prisma.user.update({
      where: { id },
      data: { name, email },
    });
  }

  async delete(id) {
    return prisma.user.delete({
      where: { id },
    });
  }

  async getById(id) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async getAll() {
    return prisma.user.findMany({
      include: { posts: true, comments: true },
    });
  }
}
