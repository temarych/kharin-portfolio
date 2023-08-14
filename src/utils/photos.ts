"use server";

import { prisma } from "./prisma";

export const incrementPhotoViews = async (id: string) => {
  const photo = await prisma.photo.findFirst({ where: { id } });

  if (!photo) {
    return { error: "Photo not found" };
  }

  await prisma.photo.update({
    where: { id: photo.id },
    data : { views: photo.views + 1 }
  });

  return { error: null };
}