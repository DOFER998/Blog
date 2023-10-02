import { Post, PrismaClient } from '../../prisma/generated/client';
import { Repository } from '../interfaces';

export class PostsRepository implements Repository<Post> {
  constructor(private readonly client: PrismaClient) {}

  async create({
    title,
    content,
    authorId,
  }: Pick<Post, 'title' | 'content' | 'authorId'>): Promise<Post | null> {
    return this.client.post.create({
      data: { title, content, authorId },
    });
  }

  async update({
    id,
    title,
    content,
  }: Pick<Post, 'id' | 'title' | 'content'>): Promise<Post | null> {
    return this.client.post.update({
      where: { id },
      data: { title, content },
    });
  }

  async delete({ id }: Pick<Post, 'id'>): Promise<Post | null> {
    return this.client.post.delete({
      where: { id },
    });
  }

  async getById({ id }: Pick<Post, 'id'>): Promise<Post | null> {
    return this.client.post.findUnique({
      where: { id },
      include: { author: true, comments: true },
    });
  }

  async getAll(): Promise<Post[] | null> {
    return this.client.post.findMany({
      include: { author: true, comments: true },
    });
  }
}
