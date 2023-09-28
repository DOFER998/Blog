const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


async function createUser(req) {
  const { name, email } = req.body;
  return prisma.user.create({
    data: { name, email },
  });
}

async function updateUser(req) {
  const { id } = req.params;
  const { name, email } = req.body;
  return prisma.user.update({
    where: { id },
    data: { name, email },
  });
}

async function deleteUser(req) {
  const { id } = req.params;
  return prisma.user.delete({
    where: { id },
  });
}

async function getUserById(req) {
  const { id } = req.params;
  return prisma.user.findUnique({
    where: { id },
  });
}

function getAllUsers() {
  return prisma.user.findMany();
}

async function createPost(req) {
  const { title, content, authorId } = req.body;
  return prisma.post.create({
    data: { title, content, authorId },
  });
}

async function updatePost(req) {
  const { id } = req.params;
  const { title, content } = req.body;
  return prisma.post.update({
    where: { id },
    data: { title, content },
  });
}

async function deletePost(req) {
  const { id } = req.params;
  return prisma.post.delete({
    where: { id },
  });
}

async function getPostById(req) {
  const { id } = req.params;
  return prisma.post.findUnique({
    where: { id },
    include: { author: true },
  });
}

function getAllPosts() {
  return prisma.post.findMany({
    include: { author: true },
  });
}

async function createComment(req) {
  const { content, postId, authorId } = req.body;
  return prisma.comment.create({
    data: { content, postId, authorId },
  });
}

async function updateComment(req) {
  const { id } = req.params;
  const { content } = req.body;
  return prisma.comment.update({
    where: { id },
    data: { content },
  });
}

async function deleteComment(req) {
  const { id } = req.params;
  return prisma.comment.delete({
    where: { id },
  });
}

async function getCommentById(req) {
  const { id } = req.params;
  return prisma.comment.findUnique({
    where: { id },
    include: { post: true, author: true },
  });
}

function getAllComments() {
  return prisma.comment.findMany({
    include: { post: true, author: true },
  });
}


module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getAllPosts,
  createComment,
  updateComment,
  deleteComment,
  getCommentById,
  getAllComments,
};
