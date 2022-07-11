import { Prisma } from "@prisma/client";
import { prisma } from 'server/prisma';
import { createRouter } from 'server/createRouter';
import { z } from 'zod';

const defaultBraketUserProfileSelect = Prisma.validator<Prisma.BraketUserProfileSelect>()({
  id: true,
  userId: true,
  biography: true,
  profileImage: true,
  username: true,
  timezone: true,
  email: true,
});

export const braketUserRouter = createRouter()
//create
.mutation('create-profile', {
  input: z.object({
    profileImage: z.string(),
    biography: z.string(),
    username: z.string(),
    timezone: z.string(),
    email: z.string(),
  }),
  async resolve({ input: {profileImage, username, timezone, email, biography} }) {
    const userImage = await prisma.braketUserProfile.create({
      data: {
        profileImage: profileImage,
        biography: biography,
        username: username,
        timezone: timezone,
        email: email,
        user: {connect: {email: email}}
      },
      select: defaultBraketUserProfileSelect,
    });
    return userImage;
  },
})
//read
.query('find-one', {
  input: z.object({
    email: z.string(),
  }),
  async resolve({input: {email}}) {
    return prisma.braketUserProfile.findUnique({
      where: {email: email},
      select: defaultBraketUserProfileSelect,
    })
  }
})
.query('all', {
  async resolve() {
    return prisma.braketUserProfile.findMany({
      select: defaultBraketUserProfileSelect,
    });
  },
});