import { prisma } from '../db.js';

export class PostsRepository {

  async create(title, content, authorId) {
    return prisma.post.create({
      data: { title, content, authorId },
    });
  }

  async update(id, title, content) {
    return prisma.post.update({
      where: { id },
      data: { title, content },
    });
  }

  async delete(id) {
    return prisma.post.delete({
      where: { id },
    });
  }

  async getById(id) {
    return prisma.post.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  async getAll() {
    return prisma.post.findMany({
      include: { author: true },
    });
  }
}
