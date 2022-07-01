import { Prisma } from "@prisma/client";
import { prisma } from 'server/prisma';
import { createRouter } from 'server/createRouter';
import { z } from 'zod';

const defaultBraketUserProfileSelect = Prisma.validator<Prisma.BraketUserProfileSelect>()({     
    userId: true,
    user: true,      
    biography: true, 
    profileImage: true, 
});

export const braketUserRouter = createRouter()
//create
.mutation('update-profileImage', {
    input: z.object({
        userId: z.string(),
        profileImage: z.string(),
  }),
    async resolve({ input }) {
      const userImage = await prisma.braketUserProfile.updateMany({
        where: {
            userId: input.userId
        },
        data: {
            profileImage: input.profileImage,
        },
        // select: {: true},
      });
      return userImage;
    },
  })