import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { createRouter } from 'server/createRouter';
import { prisma } from 'server/prisma';
import { z } from 'zod';

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
 const defaultPostSelect = Prisma.validator<Prisma.PostSelect>()({
  id: true,
  title: true,
  text: true,
  createdAt: true,
  updatedAt: true,
});

export const postRouter = createRouter()
// create
.mutation('add-post', {
  input: z.object({
    id: z.string().uuid().optional(),
    title: z.string().min(1).max(32),
    text: z.string().min(1),
}),
  async resolve({ input }) {
    const post = await prisma.post.create({
      data: input,
      select: defaultPostSelect,
    });
    return post;
  },
}).query('all', {
  async resolve() {
    /**
     * For pagination you can have a look at this docs site
     * @link https://trpc.io/docs/useInfiniteQuery
     */

    return prisma.post.findMany({
      select: defaultPostSelect,
    });
  },
})