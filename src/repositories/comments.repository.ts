import { Comment, PrismaClient } from '../../prisma/generated/client';
import { Repository } from '../interfaces';

export class CommentsRepository implements Repository<Comment> {
  constructor(private readonly client: PrismaClient) {}

  async create({
    content,
    postId,
    authorId,
  }: Pick<Comment, 'content' | 'postId' | 'authorId'>): Promise<Comment | null> {
    return this.client.comment.create({
      data: { content, postId, authorId },
    });
  }

  async update({ id, content }: Pick<Comment, 'id' | 'content'>): Promise<Comment | null> {
    return this.client.comment.update({
      where: { id },
      data: { content },
    });
  }

  async delete({ id }: Pick<Comment, 'id'>): Promise<Comment | null> {
    return this.client.comment.delete({
      where: { id },
    });
  }

  async getById({ id }: Pick<Comment, 'id'>): Promise<Comment | null> {
    return this.client.comment.findUnique({
      where: { id },
      include: { post: true, author: true },
    });
  }

  async getAll(): Promise<Comment[] | null> {
    return this.client.comment.findMany({
      include: { post: true, author: true },
    });
  }
}
