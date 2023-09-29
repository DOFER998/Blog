import { prisma } from '../db.js';

export class CommentsRepository {

  async create(content, postId, authorId) {
    return prisma.comment.create({
      data: { content, postId, authorId },
    });
  }

  async update(id, content) {
    return prisma.comment.update({
      where: { id },
      data: { content },
    });
  }

  async delete(id) {
    return prisma.comment.delete({
      where: { id },
    });
  }

  async getById(id) {
    return prisma.comment.findUnique({
      where: { id },
      include: { post: true, author: true },
    });
  }

  async getAll() {
    return prisma.comment.findMany({
      include: { post: true, author: true },
    });
  }
}
